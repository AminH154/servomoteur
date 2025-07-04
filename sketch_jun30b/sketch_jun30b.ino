#include <SPI.h>
#include <MFRC522.h>
#include <WiFi.h>
#include <FirebaseESP32.h>

const char *ssid = "aa";
const char *password = "aminboua";
const char *firebaseHost="https://test-f512f-default-rtdb.firebaseio.com";
const char *databaseSecret="KoAGAQOpCpqVvqK4PdMbTQv0315OnTUVXvWfNULq"  ;
String text2;
FirebaseData firebaseData;


#define SS_PIN 5
#define RST_PIN 27
//#define Son 8
MFRC522 mfrc522(SS_PIN, RST_PIN);

void setup() {
  Serial.begin(9600);
  connect();
  Serial.begin(9600);
  Serial.println("Initializing...");
  Firebase.begin(firebaseHost,databaseSecret);

  
  SPI.begin();
  mfrc522.PCD_Init();
  
  Serial.println("RFID Ready");
//  pinMode(Son, OUTPUT);
}

void loop() {
  // Look for new cards
  if (mfrc522.PICC_IsNewCardPresent() && mfrc522.PICC_ReadCardSerial()) {
    Serial.println("Card detected!");
    String id ="";
    // Show UID on serial monitor
    Serial.print("Card UID: ");
    for (byte i = 0; i < mfrc522.uid.size; i++) {
       id += String(mfrc522.uid.uidByte[i], HEX);
    }
    Serial.println(id);
    //digitalWrite(Son, HIGH);
    delay(300);
   // digitalWrite(Son, LOW);
    // Halt PICC
    mfrc522.PICC_HaltA();
    // Stop encryption on PCD
    mfrc522.PCD_StopCrypto1();
    Firebase.setString(firebaseData,"/id",id);
    
  }
}
void connect()
{
    WiFi.begin(ssid, password);
    while (WiFi.status() != WL_CONNECTED) {
        delay(1000);
        Serial.println("Connecting to WiFi...");
    }

    Serial.println("Connected to WiFi");
  

}