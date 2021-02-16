import {reverse_month_day, return_intensity, return_hemisphere} from "./function-logic.js"

const print_meteor_shower = (list_meteor) => {
    console.log("\nMETEOR NAME                - INTENSITY   - HEMISPHERE - PERIOD ")
    list_meteor.forEach( print_iten_meteor_shower );
        
}

const print_iten_meteor_shower = (meteor) => {
    const name = meteor.name.padEnd(27, " ")
    
    let intensity = return_intensity(meteor.intensity)
    let hemisphere = return_hemisphere(meteor.declination)

    intensity = intensity.padEnd(11, " ")
    hemisphere = hemisphere.padEnd(10, " ")

    let start_date = reverse_month_day(meteor.start)
    let end_date = reverse_month_day(meteor.end)

    console.log(`${name} - ${intensity} - ${hemisphere} - ${start_date} - ${end_date}`)
}

export default print_meteor_shower