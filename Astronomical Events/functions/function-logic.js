export const visible_meteors = (meteor, date) => {
    const current_year = date.getFullYear()

    const start_date = new Date(meteor.start + "/" + current_year)
    const end_date = new Date(meteor.end + "/" + current_year)

    if (start_date.getMonth() > end_date.getMonth()) {
        const end_year = end_date.getFullYear()
        end_date.setFullYear(end_year + 1)
    }

    return (date >= start_date && date <= end_date)
}

export const next_meteor_shower = (meteor, date) => {
    const current_year = date.getFullYear()
    const start_date = new Date(meteor.start + "/" + current_year)
    const next_date = new Date(date)

    if (date.getMonth() > start_date.getMonth()) {
        const end_year = start_date.getFullYear()
        start_date.setFullYear(end_year + 1)
    }

    next_date.setMonth(next_date.getMonth() + 2)

    return (date < start_date && start_date < next_date)
}



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