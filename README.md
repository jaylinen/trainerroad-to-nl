# trainerroad-to-nl
This code allows you to export Trainerroad workout to natural language. You can then e.g import your workout to [intervals.icu](https://intervals.icu/)

## Step by step instructions:
1. login to your Trainer Road account, 
2. open the workout. example: https://www.trainerroad.com/app/cycling/workouts/1588-gabb
3. Open https://raw.githubusercontent.com/jaylinen/trainerroad-to-nl/main/dist/index.js file and copy it's content. 
4. On your Trainer Road window, open javascript console (for eaxample, for Chrome view -> developer -> javascript console).
5. In the console, paste content of the file from step 3.
6. Download the file

## Know limitations:

Trainerroad interval data doesn't include complete data about ramp up or ramp downs. These need to be fixed manually after the export:

Example:
```
- 240s 60%
- 600s 70%
- 180s 70%
```

Fixed:
```
- 240s 60%
- Ramp 60%-70% 600s
- 180s 70%
```
