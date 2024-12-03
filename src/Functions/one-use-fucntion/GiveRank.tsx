export const ChangePts = (value: any, setValue: Function) => {
    if (value < 160 && value != 0 && value > 0) {
        setValue(2)
    } else if (value > 160 && value < 310) {
        setValue(3)
    } else if (value > 310 && value < 470) {
        setValue(4)
    } else if (value > 470 && value < 620) {
        setValue(5)
    } else if (value > 620 && value < 770) {
        setValue(6)
    } else if (value > 770 && value < 930) {
        setValue(7)
    } else if (value > 930 && value < 1100) {
        setValue(8)
    } else if (value > 1100 && value < 1240) {
        setValue(9)
    } else if (value > 1240 && value < 1390) {
        setValue(10)
    } else if (value > 1400 && value < 1550) {
        setValue(11)
    } else if (value > 1541 && value < 1700) {
        setValue(12)
    } else if (value > 1700 && value < 1850) {
        setValue(13)
    } else if (value > 1850 && value < 2000) {
        setValue(14)
    } else if (value > 2000 && value < 2160) {
        setValue(15)
    } else if (value > 2160 && value < 2310) {
        setValue(16)
    } else if (value > 2310 && value < 2470) {
        setValue(17)
    } else if (value > 2470 && value < 2620) {
        setValue(18)
    } else if (value > 2620 && value < 2780) {
        setValue(19)
    } else if (value > 2780 && value < 2930) {
        setValue(20)
    } else if (value > 2930 && value < 3080) {
        setValue(21)
    } else if (value == 3080 && value < 3240 || value == 3180) {
        setValue(22)
    } else if (value > 3240 && value < 3390) {
        setValue(23)
    } else if (value > 3390) {
        setValue(1)
    }
}


export const ChangeElo = (value: any, setValue: Function) => {
    if (value > 0 && value < 790) {
        setValue(24)
    } else if (value > 790 && value < 950) {
        setValue(25)
    } else if (value > 950 && value < 1100) {
        setValue(26)
    } else if (value > 1050 && value < 1250 || value == 1100) {
        setValue(27)
    } else if (value > 1250 && value < 1400) {
        setValue(28)
    } else if (value > 1350 && value < 1550) {
        setValue(29)
    }
}
