import meteor_shower from "./date/meteor-shower.js"
import print_meteor_shower from "./functions/function-interface.js"

//current system date
const current_date = new Date()

//filtered meteor shower
const visible_meteors = meteor_shower.filter((meteor) => {

    const current_year = current_date.getFullYear()

    const start_date = new Date(meteor.start + "/" + current_year)
    const end_date = new Date(meteor.end + "/" + current_year)

    //checks if the starting month is greater than the ending month
    if (start_date.getMonth() > end_date.getMonth()) {
        const end_year = end_date.getFullYear()
        end_date.setFullYear(end_year + 1)
    }

    return (current_date >= start_date && current_date <= end_date)
})

const next_meteor_shower = meteor_shower.filter((meteor) => {
    const year = current_date
    const current_year = year.getFullYear()
    const start_date = new Date(meteor.start + "/" + current_year)
    const next_date = new Date(year)

    if (year.getMonth() > start_date.getMonth()) {
        const end_year = start_date.getFullYear()
        start_date.setFullYear(end_year + 1)
    }

    //check the next meteor showers that will happen in 2 months
    next_date.setMonth(next_date.getMonth() + 2)

    return (year < start_date && start_date < next_date)
})


if (visible_meteors.length > 0) {
    let message = "\nWe found "
    message += visible_meteors.length == 1 ? "1 Meteor Shower:" : visible_meteors.length + " Meteor Shower:"

    console.log(message)
    print_meteor_shower(visible_meteors)
} else {
    console.log("\nNo meteor showers passing at the moment")
}

console.log("\n\nDon't miss the next meteor showers:")
print_meteor_shower(next_meteor_shower)