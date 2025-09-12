local showingCinema = false

RegisterCommand("cinema", function()
    showingCinema = not showingCinema
SendNUIMessage({
    type = "cinema",
    enable = true,
    barHeight = Config.BarHeight,
    soundInVolume  = Config.CinemaSoundInVolume,  --Can be commented out to disable/delete MP3s
    soundOutVolume = Config.CinemaSoundOutVolume  --Can be commented out to disable/delete MP3s
})
    SetNuiFocus(false, false)
end, false)
