export const reverse_month_day = (month_day) => {
    const reverse_date = month_day.split("/")

    return reverse_date[1] + "/" + reverse_date[0]
}

export const return_intensity = (intensity) => {
    let new_intensity = "1 (Weak)"

    if (intensity.indexOf('Strong') >= 0) {
        new_intensity = "3 (Strong)"
    } else if (intensity.indexOf('Medium') >= 0) {
        new_intensity = "2 (Medium)"
    } else if (intensity.indexOf('Irregular') >= 0) {
        new_intensity = "(Irregular)"
    }

    return new_intensity
}

export const return_hemisphere = (declination) => declination >= 0 ? "North" : "South"