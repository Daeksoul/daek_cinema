local showingCinema = false

RegisterCommand("cinema", function()
    showingCinema = not showingCinema
SendNUIMessage({
    type = "cinema",
    enable = true,
    barHeight = Config.BarHeight,
    soundInVolume  = Config.CinemaSoundInVolume,
    soundOutVolume = Config.CinemaSoundOutVolume
})
    SetNuiFocus(false, false)
end, false)
