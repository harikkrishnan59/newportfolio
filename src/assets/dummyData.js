export const dummyProjects = [
    { 
      id: "29", 
      Img: "/pn9.jpeg", 
      Title: "Humanoid Robot Leg using ROS 2", 
      Description: "Developed a Humanoid Robot Leg using Raspberry Pi 5, ROS 2, and 8× DS5160 servo motors for precise joint movement and robotic leg control.\n\nDesigned and implemented coordinated motion control, servo synchronization, and ROS 2 communication to simulate humanoid leg movement for future walking and balancing applications.\n\nIntegrated embedded systems, robotic hardware, and real-time control mechanisms to improve understanding of robot kinematics, actuator control, and humanoid robotics development.\n\nThis project strengthened practical skills in robotics, ROS 2 architecture, embedded programming, hardware integration, and advanced robotic system design for future full-scale humanoid robot development.", 
      TechStack: ["Raspberry Pi 5", "ROS 2", "DS5160 Servo Motors", "Servo Control", "Robotics", "Humanoid Robot", "Embedded Programming"] 
    },
    { 
      id: "3", 
      Img: "/p3.jpg", 
      Title: "Borewell Rescue Robot – Prototype", 
      Description: "A compact, intelligent robot designed to safely and efficiently rescue children trapped in borewells, offering real-time monitoring and automated handling.\n\nAdjustable Mechanism: The robot adapts to different pipe diameters, ensuring smooth and safe movement inside narrow borewells.\n\nESP32-CAM for Live Video: Provides real-time video streaming, enabling rescuers to monitor and control operations from the surface.\n\nChild Detection & Automatic Claw: Sensors detect the child, activating a claw mechanism to securely and gently grasp them.\n\nSafe and Precise Operation: Robotic claws offer a firm yet gentle grip, maintaining stability in confined spaces during the rescue.", 
      TechStack: ["ESP32-CAM", "Sensors", "Robotics"] 
    },
    { 
      id: "21", 
      Img: "/pn1.jpeg", 
      Title: "AI Tutor Robot for Interactive Learning", 
      Description: "Built an AI-Powered Tutor Robot using Raspberry Pi 5, ROS, and ESP32-CAM to create an interactive robotic assistant for smart learning and real-time communication. Integrated AI tutoring features with voice interaction using Vosk for offline speech recognition and Grok AI for intelligent responses through a custom web-based dashboard. Designed the robot’s hardware structure, implemented automation and robotic control systems, and developed both autonomous and manual operating modes with live camera monitoring support. Completed the entire project within 36 hours, including coding, debugging, hardware integration, and system testing, gaining hands-on experience in robotics, embedded systems, AI integration, and real-time automation.", 
      TechStack: ["Raspberry Pi 5", "ROS", "ESP32-CAM", "Vosk", "Grok AI", "Robotics", "Web Dashboard"] 
    },
    { 
      id: "6", 
      Img: "/p6.jpg", 
      Title: "Traffic Rider Game – Real-Time Steering Controlled Car Game", 
      Description: "A sensor-based gaming setup where players control a car with a physical steering wheel, navigating obstacles on a moving chart while testing reflexes and coordination.\n\nSteering Wheel for Car Control: Players move the car left or right on-screen using a real steering wheel for realistic driving simulation.\n\nMoving Chart with Obstacles: A scrolling chart simulates traffic with other cars, creating a dynamic game environment.\n\nCollision Detection with Color Sensor: Detects collisions between the player’s car and obstacles, ending the game automatically.\n\nAdjustable Speed & Game Over Alerts: Traffic speed can be set for difficulty levels, with buzzer and visual “Game Over” indicators on collision.", 
      TechStack: ["Arduino", "Sensors", "Gaming"] 
    },
    { 
      id: "5", 
      Img: "/p5.jpg", 
      Title: "Alert Vision – Advanced Camera Security & Intrusion Alert System", 
      Description: "A smart security system that monitors, detects, and responds to intrusions in real time, using sensors, alerts, and optional defensive measures to protect property.\n\nESP32-CAM for Live Capture: Monitors the area and captures images when threats or intrusions are detected.\n\nVibration Sensor for Tamper Detection: Detects shaking or tampering attempts and triggers alarms and response actions.\n\nIR Sensor & Buzzer Alerts: Identifies obstructions to the camera view and warns intruders with loud buzzer alerts.\n\nEmergency Communication & Defense: Sends SMS/call alerts to contacts and optionally uses a stun module to deter unauthorized access.", 
      TechStack: ["ESP32-CAM", "Sensors", "GSM"] 
    },
    { 
      id: "1", 
      Img: "/p1.jpg", 
      Title: "Industrial Molding Machine Automation", 
      Description: "This project automates an industrial molding machine using Raspberry Pi, MQTT, and Grafana for monitoring and control.\n\nRaspberry Pi controls machine operations and communicates with sensors.\n\nOpto-couplers ensure safe and isolated switching of high-power parts.\n\nMQTT broker manages real-time communication between machine and dashboard.\n\nGrafana displays process data like temperature, pressure, and cycle time.", 
      TechStack: ["Raspberry Pi", "MQTT", "Grafana", "Python"] 
    },
    { 
      id: "2", 
      Img: "/p2.jpg", 
      Title: "Solar Trainer & Checker Kit", 
      Description: "A solar monitoring and training system that tracks solar performance with sensors and variable loads.\n\nBH1750 light sensor measures sunlight intensity on panels.\n\nCurrent and voltage sensors track energy generation performance.\n\nPotentiometers (1k, 10k, 100k) act as adjustable external loads.\n\nOLED screen displays voltage, current, and power values in real time.", 
      TechStack: ["ESP32", "OLED", "Sensors"] 
    },
    { 
      id: "4", 
      Img: "/p4.jpg", 
      Title: "Audio Analyzer – Prototype", 
      Description: "A real-time audio analysis system that captures, processes, and visualizes sound, enabling noise monitoring, frequency analysis, and alert-based applications.\n\nMicrophone-Based Audio Input: Uses sensitive microphones to capture surrounding audio signals for accurate analysis.\n\nReal-Time Audio Visualization: Processes audio with an ESP32 and displays waveforms, sound levels, or frequency spectrums on an OLED or serial plot.\n\nVolume Level Detection: Monitors and shows audio amplitude in real time, useful for noise tracking or as a VU meter.\n\nFrequency & Alert Features: Optional FFT analysis for pitch/frequency detection and threshold alerts via LED, buzzer, or messages.", 
      TechStack: ["ESP32", "OLED", "Microphone"] 
    },
    { 
      id: "7", 
      Img: "/p7.jpg", 
      Title: "Smart Cart System – RFID Billing", 
      Description: "A smart shopping solution that automatically identifies products, calculates totals, and displays billing information in real time using ESP32 and RFID technology.\n\nRFID-Based Product Identification: Each product has a unique RFID tag, which the ESP32 reads to identify items automatically.\n\nReal-Time Display on OLED: Selected products and their prices are instantly shown on an OLED screen for quick verification.\n\nAutomated Total Calculation: The system keeps a running total, updating the bill immediately as new items are scanned.\n\nEfficient & Error-Free Shopping: Reduces manual effort, prevents billing errors, and speeds up the shopping process with smart technology.", 
      TechStack: ["ESP32", "RFID", "OLED"] 
    },
    { 
      id: "8", 
      Img: "/p8.jpg", 
      Title: "Remote-Controlled Ornithocopter", 
      Description: "A flying robot that mimics bird flight using lightweight motors and remote control, demonstrating stable, maneuverable, and interactive biomimetic flight.\n\nCoreless Motors for Efficient Flight: Lightweight, high-efficiency motors enable precise wing flapping for lift and maneuverability.\n\nRemote Control Operation: ESP32 interprets signals from a remote to adjust wing motion, speed, and flight direction.\n\nWing & Tail Dynamics: Flapping wings generate lift, while tail and aileron adjustments ensure stable turning, hovering, and navigation.\n\nBiomimetic Flight Demonstration: Provides a practical model for research, education, and hobbyist exploration of robotic bird flight.", 
      TechStack: ["ESP32", "Robotics", "Coreless Motors"] 
    },
    { 
      id: "9", 
      Img: "/p9.jpg", 
      Title: "Human Assistance System for Elderly People", 
      Description: "A multi-functional system designed to provide safety, emergency support, and convenience for elderly users, integrating monitoring, alerts, and remote supervision.\n\nAudio Alerts & Notifications: DFMiniPlayer plays voice messages and alarms for medication reminders, emergency alerts, and daily instructions.\n\nContinuous Operation & Health Monitoring: Solar-powered with battery backup; includes BP sensor and manual light controls for daily convenience.\n\nEmergency Communication: A7670C GSM module sends automatic alerts or calls to pre-stored emergency contacts in critical situations.\n\nRemote Monitoring & Modular Design: Real-time mobile/web monitoring for caregivers, with support for future sensor upgrades like fall or motion detection.", 
      TechStack: ["ESP32", "GSM", "Sensors"] 
    },
    { 
      id: "10", 
      Img: "/p10.jpg", 
      Title: "IV Bag Monitoring System", 
      Description: "An ESP32-based system that monitors IV fluid levels and flow, ensuring safe and accurate medication delivery with real-time alerts and automation.\n\nFluid Level & Flow Monitoring: Continuously checks IV bag status to ensure correct medication or fluid delivery.\n\nAutomatic Valve Control: Dual-channel relay manages solenoid or motorized valve to stop flow when needed, preventing over-infusion.\n\nReal-Time Display: OLED screen shows fluid levels and valve status for easy monitoring by healthcare staff.\n\nEmergency Alerts via GSM: SIM800L module sends instant notifications to predefined contacts if issues or abnormalities occur.", 
      TechStack: ["ESP32", "GSM", "OLED"] 
    },
    { 
      id: "11", 
      Img: "/p11.jpg", 
      Title: "Line Follower Robot", 
      Description: "An Arduino-based robot that autonomously follows a pre-defined line on the ground using sensors and motor control for accurate navigation.\n\nIR Sensor-Based Line Detection: Two IR sensors detect the line and surface contrast to determine the robot’s position.\n\nArduino-Controlled Processing: Processes sensor signals to decide movement direction and path corrections in real time.\n\nMotor Control via L298N: L298N driver adjusts DC motor speeds to turn, move forward, or correct deviations.\n\nAutonomous Navigation: Demonstrates accurate line following, integrating sensors and motors for educational and automation purposes.", 
      TechStack: ["Arduino", "IR Sensors", "L298N"] 
    },
    { 
      id: "12", 
      Img: "/p12.jpg", 
      Title: "Remote Navigated Car", 
      Description: "A remotely controlled car using encoder-decoder communication, enabling precise movement and real-time motor control for learning wireless robotics.\n\nEncoder-Decoder Communication: Signals from the remote are sent via encoder and decoded by the receiver to control the car.\n\nCommand Processing via ESP32/Arduino: Processes decoded signals to execute forward, backward, left, and right movements.\n\nMotor Control with L298N: DC motors’ speed and direction are adjusted for smooth navigation and maneuvering.\n\nWireless Robotics Demonstration: Combines remote navigation, motor driving, and control logic for automation learning.", 
      TechStack: ["ESP32", "L298N", "Encoder/Decoder"] 
    },
    { 
      id: "13", 
      Img: "/p13.jpg", 
      Title: "Smart Bike Security System", 
      Description: "An ESP32-based security system that allows authorized bike access via RFID, prevents unauthorized use, and captures visual evidence of intrusions.\n\nRFID-Based Authorization: Valid owner tags enable bike ignition through a dual-channel relay, ensuring secure access.\n\nUnauthorized Access Detection: Unknown or fake tags immediately cut power, immobilizing the bike.\n\nESP32-CAM Visual Capture: Captures photos or short videos of intruders for identification and evidence.\n\nRemote Alerts & Logging: Images and logs can be stored locally or sent via Wi-Fi to the owner, with optional alarms and multiple tag support.", 
      TechStack: ["ESP32-CAM", "RFID", "Relay"] 
    },
    { 
      id: "14", 
      Img: "/p14.jpg", 
      Title: "Smart Bike Monitoring & Security", 
      Description: "An ESP32-based system that secures the bike, monitors engine temperature, and provides real-time status via OLED, combining theft protection and mechanical safety.\n\nAuthorized Access via RFID: Valid tags start the bike using a dual-channel relay, with real-time status shown on OLED.\n\nUnauthorized Access Detection: Invalid tags immediately cut power and trigger ESP32-CAM to capture intruder images.\n\nEngine Temperature Monitoring: Automatically shuts down the bike if temperature exceeds safe limits, preventing damage.\n\nComprehensive Monitoring: Combines anti-theft, visual capture, and real-time display for security and mechanical protection.", 
      TechStack: ["ESP32-CAM", "RFID", "OLED"] 
    },
    { 
      id: "15", 
      Img: "/p15.jpg", 
      Title: "Human Following Robot", 
      Description: "An Arduino-based robot that autonomously detects and follows a human, maintaining safe distance while navigating obstacles using ultrasonic and IR sensors.\n\nUltrasonic Distance Sensing: Measures distance from the person to avoid collisions and maintain a safe following gap.\n\nIR Sensors for Navigation: Detect lines and obstacles for precise movement and path correction.\n\nMotor Control via L293D: Adjusts DC motor speed and direction based on sensor inputs for smooth tracking.\n\nAutonomous Human Following: Combines responsive motor control and sensor integration for reliable tracking applications.", 
      TechStack: ["Arduino", "Ultrasonic Sensor", "IR Sensors"] 
    },
    { 
      id: "16", 
      Img: "/p16.jpg", 
      Title: "Home Automation System", 
      Description: "An ESP32-based smart home system that automates lighting, temperature, gas detection, and human presence, providing safety, convenience, and energy efficiency.\n\nTemperature & Gas Management: Sensors monitor temperature and harmful gases, controlling fans via relays for comfort and safety.\n\nAutomated Lighting Control: IR and BH1750 sensors detect presence and ambient light, turning lights on/off to save energy.\n\nVoice Control & Alerts: Bluetooth-based voice commands enable hands-free operation; notifications alert users to hazards or abnormal conditions.\n\nModular & Scalable Design: Logs environmental data and supports future expansion with additional sensors or smart devices.", 
      TechStack: ["ESP32", "Sensors", "Bluetooth"] 
    },
    { 
      id: "17", 
      Img: "/p17.jpg", 
      Title: "CO₂ Monitoring System", 
      Description: "An ESP32 system that monitors indoor CO₂ levels using an MQ-135 sensor, provides real-time feedback, and predicts hazards with TinyML for enhanced safety.\n\nReal-Time CO₂ Detection: MQ-135 sensor continuously measures carbon dioxide levels and displays them on an OLED screen.\n\nPredictive Analytics with TinyML: TensorFlow Lite models analyze sensor data to detect unusual patterns like sudden CO₂ spikes or fire risks.\n\nIntegrated Environmental Monitoring: Can combine data from temperature, smoke, and other sensors for comprehensive indoor safety.\n\nVisual Feedback & Alerts: Ensures timely notifications and preventive measures for smart homes, offices, or laboratories.", 
      TechStack: ["ESP32", "TinyML", "MQ-135 Sensor"] 
    },
    { 
      id: "18", 
      Img: "/p18.jpg", 
      Title: "IoT-Based Microgrid System", 
      Description: "An ESP32-based microgrid system that integrates solar power, battery storage, and load management, enabling remote monitoring, optimized energy usage, and reliable power supply.\n\nSolar & Battery Integration: Controls multiple energy sources, using relays to switch between solar, battery, and grid power efficiently.\n\nSolar Tracker & Battery Shifting: Maximizes solar efficiency and ensures continuous power supply by adjusting panels and switching batteries based on voltage.\n\nIoT Connectivity & Monitoring: Live voltage, current, and energy data are accessible via a dashboard or app through an HTTP server on the ESP32.\n\nAutomatic Load Management & Alerts: Prioritizes critical loads, balances energy usage, and sends notifications for overvoltage, low battery, or solar faults.", 
      TechStack: ["ESP32", "IoT", "Solar"] 
    },
    { 
      id: "19", 
      Img: "/p19.jpg", 
      Title: "Smart Garden System", 
      Description: "An ESP32-based smart garden system that monitors soil and environmental conditions, automates irrigation, and allows remote management for healthy plant growth.\n\nMulti-Sensor Monitoring: Temperature, soil moisture, water level, and rain sensors track garden conditions for efficient care.\n\nAutomated Irrigation & Scheduling: RTC module and water pump control ensure timely watering while avoiding wastage.\n\nRemote Control & Data Logging: HTTP server enables monitoring, pump control, and historical data access from any device.\n\nAlerts & Preventive Actions: Sends notifications for low water levels or abnormal conditions, ensuring reliable garden management.", 
      TechStack: ["ESP32", "Sensors", "RTC"] 
    },
    { 
      id: "20", 
      Img: "/p20.jpg", 
      Title: "Robot Arm System", 
      Description: "An Arduino-based robotic arm with L293D motor control, capable of precise multi-directional movement and object manipulation for automation and educational purposes.\n\nMulti-Joint Motorized Arm: Several joints allow movements like up, down, left, right, gripping, and releasing objects.\n\nArduino-Based Control: Processes input signals and controls motor direction and speed via the L293D driver.\n\nFlexible Control Methods: Supports push buttons, joysticks, or wireless inputs for versatile operation.\n\nAutomation & Educational Applications: Demonstrates integration of motors, microcontrollers, and mechanics for robotics learning and object handling.", 
      TechStack: ["Arduino", "L293D", "Robotics"] 
    },
    { 
      id: "22", 
      Img: "/pn2.jpeg", 
      Title: "Offline Voice-Controlled Robotic Car", 
      Description: "Developed an Offline Voice-Controlled Car using Espressif Systems ESP32, DFRobot Offline Voice Recognition Module, and L298N motor driver to enable intelligent robotic control without internet connectivity.\n\nImplemented offline speech recognition to process predefined voice commands such as forward, backward, left, right, and stop, allowing the robotic vehicle to respond in real time with low latency and high reliability.\n\nIntegrated embedded control logic, DC gear motors, and motor driver systems to achieve smooth wireless movement control while improving understanding of human-machine interaction and autonomous robotics concepts.\n\nThis project strengthened practical skills in embedded systems, offline AI integration, real-time motor control, robotic automation, and voice-based control systems, with future plans for obstacle detection, PWM speed control, and hybrid voice + remote operation modes.", 
      TechStack: ["ESP32", "DFRobot Offline Voice Recognition Module", "L298N Motor Driver", "DC Gear Motors", "Embedded Systems", "Offline Voice Control", "Robotics"] 
    },
    { 
      id: "23", 
      Img: "/pn3.jpeg", 
      Title: "Offline Voice Reply System using ESP32", 
      Description: "Developed a Voice Reply System using Espressif Systems ESP32, DFRobot Offline Voice Recognition Module, and DFPlayer Mini to enable real-time offline voice interaction without internet connectivity.\n\nImplemented offline speech recognition and audio playback functionality, where the system detects predefined voice commands and responds with corresponding audio replies through connected speakers.\n\nIntegrated embedded control logic, serial communication, and audio modules to create a reliable human-machine interaction system with faster response time and fully offline operation.\n\nThis project enhanced practical skills in embedded systems, offline voice recognition, audio processing, real-time automation, and intelligent voice-based interface development, with future plans for IoT integration, multilingual support, and smart home automation control.", 
      TechStack: ["ESP32", "DFRobot Offline Voice Recognition Module", "DFPlayer Mini", "Speaker", "Serial Communication", "Audio Playback", "Embedded Systems"] 
    },
    { 
      id: "24", 
      Img: "/pn4.jpeg", 
      Title: "Smart Helmet with Accident & Drowsiness Detection", 
      Description: "Developed a Safe Ride System Smart Helmet using Espressif Systems ESP32, MPU6050, IR sensors, alcohol sensor, DFPlayer Mini, and offline voice recognition modules to improve rider safety through intelligent monitoring and emergency response features.\n\nImplemented helmet detection, alcohol detection, drowsiness monitoring, and accident detection systems with real-time voice alerts and offline voice interaction to ensure faster response and reliable operation without internet dependency.\n\nIntegrated sensor-based safety mechanisms with Telegram emergency alert functionality and a live monitoring dashboard capable of displaying real-time sensor data, rider status, and system activity for continuous safety monitoring.\n\nThis project enhanced practical experience in embedded systems, IoT, voice-based human-machine interaction, real-time monitoring, sensor fusion, and smart safety automation, with future improvements planned for GPS live tracking, AI-based fatigue analysis, and cloud-based ride analytics.", 
      TechStack: ["ESP32", "MPU6050", "IR Sensor", "Alcohol Sensor", "DFPlayer Mini", "Offline Voice Recognition", "Telegram Alert", "IoT Dashboard"] 
    },
    { 
      id: "25", 
      Img: "/pn5.jpeg", 
      Title: "ESP32-Based Smart Dam Monitoring System", 
      Description: "Developed an ESP32-Based Dam Monitoring System designed to monitor water levels and automate floodgate control for improved water management and safety applications.\n\nThe system uses a rain/water level sensing mechanism integrated with Espressif Systems ESP32 and a servo motor to detect rising water levels and automatically control the dam gate mechanism in real time.\n\nImplemented embedded control logic, sensor monitoring, and actuator control to simulate intelligent dam operations capable of reducing manual intervention and improving response during overflow conditions.\n\nThis project strengthened practical skills in embedded systems, sensor integration, automation, real-time monitoring, and IoT-based control systems, with future plans for wireless data logging, live dashboard monitoring, and emergency alert integration.", 
      TechStack: ["ESP32", "Water Level Sensor", "Rain Sensor", "Servo Motor", "Embedded Systems", "Automation", "IoT Monitoring"] 
    },
    { 
      id: "26", 
      Img: "/pn6.jpeg", 
      Title: "Smart Obstacle Detection and Alert System", 
      Description: "Developed an ESP32-Based Smart Obstacle Detection and Alert System using an ultrasonic sensor, relay module, buzzer, and DC motor for real-time distance monitoring and automated safety response applications.\n\nThe system uses the ultrasonic sensor to detect nearby obstacles or objects, while the Espressif Systems ESP32 processes the sensor data and activates alarms, relay-based controls, or motor operations depending on the detected distance.\n\nImplemented embedded control logic, real-time sensing, wireless-capable microcontroller integration, and automated alert mechanisms to improve understanding of smart automation and safety monitoring systems.\n\nThis project strengthened practical skills in embedded systems, sensor interfacing, relay control, motor automation, and real-time monitoring, with applications in smart parking systems, industrial safety monitoring, automatic braking systems, robotic obstacle avoidance, and security alert systems.", 
      TechStack: ["ESP32", "Ultrasonic Sensor", "Relay Module", "Buzzer", "DC Motor", "Embedded Systems", "Real-Time Monitoring"] 
    },
    { 
      id: "27", 
      Img: "/pn7.jpeg", 
      Title: "Food Moisture Monitoring System using 8051 & Arduino Mega", 
      Description: "Developed a Moisture Level Monitoring System for Anil Semiya using an 8051 microcontroller, Arduino Mega, and moisture sensing modules to measure and monitor moisture content in food products for quality analysis and storage safety.\n\nThe system detects moisture variations in the semiya samples using sensors and processes the data through embedded controllers to enable accurate real-time monitoring and analysis of product conditions.\n\nIntegrated sensor interfacing, embedded control logic, and serial communication between the 8051 and Arduino Mega platforms to improve understanding of industrial monitoring systems and food quality automation.\n\nThis project enhanced practical skills in embedded systems, sensor integration, microcontroller communication, and real-time data acquisition, with applications in food processing industries, smart storage systems, agricultural monitoring, and quality control automation.", 
      TechStack: ["8051 Microcontroller", "Arduino Mega", "Moisture Sensor", "Serial Communication", "Embedded Systems", "Food Quality Monitoring"] 
    },
    { 
      id: "28", 
      Img: "/pn8.jpeg", 
      Title: "Intelligent Bird Deterrent System for Smart Farming", 
      Description: "Developed an Intelligent Bird Deterrent System for agricultural fields using Raspberry Pi, image processing, and an ultrasonic sensor to automatically detect birds and protect crops from damage.\n\nThe system uses a camera-based vision module and ultrasonic sensing to identify bird movement and nearby activity in real time, and when birds are detected, a motorized mechanical arm starts shaking automatically to scare them away from the farming area.\n\nImplemented embedded control systems, real-time image processing, distance sensing, motor actuation, and automated detection logic to create a smart and efficient crop protection solution with minimal human intervention.\n\nThis project enhanced practical skills in computer vision, Raspberry Pi programming, ultrasonic sensor interfacing, automation, embedded systems, and intelligent agricultural technology, with applications in smart farming, crop monitoring, and automated field protection systems.", 
      TechStack: ["Raspberry Pi", "Image Processing", "Ultrasonic Sensor", "Camera Module", "Motorized Arm", "Computer Vision", "Smart Farming"] 
    }
];
  
export const dummyCertificates = [
  { Img: "./c1.jpg" },
  { Img: "./c2.jpg" },
  { Img: "./c3.jpg" },
  { Img: "./c4.jpg" },
  { Img: "./c5.jpg" },
  { Img: "./c6.jpg" },
  { Img: "./c7.jpg" },
  { Img: "./c8.jpg" },
  { Img: "./c9.jpg" },
  { Img: "./c10.jpg" },
  { Img: "./c11.jpg" },
  { Img: "./c12.jpg" },
  { Img: "/n1.jpeg" },
  { Img: "/n2.jpeg" },
  { Img: "/n3.jpeg" },
  { Img: "/n4.jpeg" },
  { Img: "/n5.jpeg" },
  { Img: "/n6.jpeg" },
  { Img: "/n7.jpeg" },
];
