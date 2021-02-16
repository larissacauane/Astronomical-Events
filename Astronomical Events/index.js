import meteor_shower from "./date/meteor-shower.js"
import print_meteor_shower from "./functions/function-interface.js"
import {visible_meteors, next_meteor_shower} from "./functions/function-logic.js"

//current system date
const current_date = new Date()

const visible_meteors_shower = meteor_shower.filter((meteor) => visible_meteors(meteor, current_date))

const next_visible_meteor_shower = meteor_shower.filter((meteor) => next_meteor_shower(meteor, current_date))



if (visible_meteors_shower.length > 0) {
    let message = "\nWe found "
    message += visible_meteors_shower.length == 1 ? "1 Meteor Shower:" : visible_meteors_shower.length + " Meteor Shower:"

    console.log(message)
    print_meteor_shower(visible_meteors_shower)
} else {
    console.log("\nNo meteor showers passing at the moment")
}

console.log("\n\nDon't miss the next meteor showers:")
print_meteor_shower(next_visible_meteor_shower)