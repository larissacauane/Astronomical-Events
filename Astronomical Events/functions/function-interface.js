const print_meteor_shower = (list_meteor) => {
    
    list_meteor.forEach( print_iten_meteor_shower );
        
}

const print_iten_meteor_shower = (meteor) => {
    console.log(`${meteor.name} - ${meteor.rating} - ${meteor.declination} - ${meteor.start} - ${meteor.end}`)
}


export default print_meteor_shower