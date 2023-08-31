## React-Native Mobile App for FRC Scouting

<img style="width: 1250px" src="https://miro.medium.com/v2/resize:fit:2000/0*g0G6ZkZR4_IRdQjr.png">

I just want to let you know before you start hopping on the code editor, that the react-native set-up is vastly different from its web-app variation. Now that that's out of the way, to program the Android version, we'll use Windows 10/11

### What You'll Need:

- Environment Variables
- Java JDK 17
- Gradle 7
- Android Studio
- Administrator Permissions

### Instructions

https://www.youtube.com/watch?v=8ejuHsaXiwU

Important Notes: Make sure you are using the correct version of Java JDK and Gradle. IT HAS TO BE JDK 17 AND GRADLE 7. To check your Java version, use `Java -version` in the command prompt. To check your gradle version, use `Gradle --version` in the command prompt. 

### Troubleshooting

For VSC, you to settings and type in settings.json. Then make sure that your Java.Home is set to a path like `C:\Program Files\Java\jdk-17.0.5`. Make sure you also create a Java_HOME path in your environment variables for you terminal.

To change the version of your gradle, do the following:

1. Find the `build.gradle` file in the `android` folder
2. Find `classpath("com.android.tools.build:gradle")` and replace with `classpath("com.android.tools.build:gradle:7.0.2")`
3. In your command prompt, find the scouting-app directory and run `cd scouting/android/gradle`
5. Run `.\gradlew` and it will change the version of gradle