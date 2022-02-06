basic.forever(function () {
    if (input.lightLevel() > 70) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
    } else {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 0)
    }
})
