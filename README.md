# daek_cinema 

A standalone script for RedM, to show cinematic-style bars without the random camera changes from the in-game function. For those monologuing, action or cinematic recording moments.

Command to trigger is: /cinema

Top and bottom cinematic bars fade and slide in and play a sound.
Volume of the sounds can be adjusted in the config, along with height of the cinematic bars;

```Config.lua
Config = {}

-- height of each bar in pixels
Config.BarHeight = 130

-- master volumes the cinematic audio cues
Config.CinemaSoundInVolume  = 0.3
Config.CinemaSoundOutVolume = 0.2
```

## Installation

Install daek_cinema in the [standalone] folder to keep things simple, if you have the standalone folder ensured!
If you install outside of the [standalone] folder, make sure 'ensure daek_cinema' is in your server startup config.

```txadmin
  ensure daek_cinema
```
