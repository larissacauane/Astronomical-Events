// https://pt.wikipedia.org/wiki/Lista_de_chuvas_de_meteoros

const meteor_shower = [

    { name: 'Alfa Centaurídeos', start: '01/28', end: '02/21', peak: 'Feb 8', rise: 210, declination: -59, speed: 56, zhr: '6', rating: 'Medium'},
    
    { name: 'Gama Normídeos', start: '02/25', end: '03/22', peak: 'Mar 14', rise: 239, declination: -50, speed: 56, zhr: '6', rating: 'Medium'},
    
    { name: 'Pi Pupídeos', start: '04/15', end: '04/28', peak: 'Apr 23', rise: 110, declination: -45, speed: 18, zhr: 'Variable', rating: 'Irregular'},
    
    { name: 'Líridas', start: '04/16', end: '04/25', peak: 'Apr 22', rise: 271, declination: 34, speed: 49, zhr: '18', rating: 'Strong with fast and persistent meteors'},
    
    { name: 'Eta Aquáridas', start: '04/19', end: '05/28', peak: 'May 5', rise: 338,  declination: -1, speed: 66, zhr: '65', rating: 'Strong with very fast meteors and of great length'},

    { name: 'Eta Líridas', start: '05/03', end: '05/14', peak: 'May 8', rise: 287, declination: 44, speed: 43, zhr: '3', rating: 'Weak'},

    { name: 'Bootídeos de Junho', start: '06/28', end: '06/28', peak: 'Jun 28', rise: 224, declination: 48, speed: 18, zhr: 'Variable', rating: 'Irregular'},
    
    { name: 'Alfa Capricornídeos', start: '07/03', end: '08/15', peak: 'Jul 30', rise: 307, declination: -10, speed: 23, zhr: '5', rating: 'Weak'},
    
    { name: 'Delta Aquáridas do Sul', start: '07/12', end: '08/19', peak: 'Jul 28', rise: 340, declination: -16, speed: 41, zhr: '16', rating: 'Strong with slow meteors and long trail'},
    
    { name: 'Piscis Austrinídeos', start: '07/15', end: '08/10', peak: 'Jul 28', rise: 341, declination: -30,  speed: 35, zhr: '5', rating: 'Medium'},
    
    { name: 'Perseidas', start: '07/17', end: '08/24', peak: 'Aug 12', rise: 48, declination: 58, speed: 59, zhr: '100', rating: 'Strong and very fast'},
    
    { name: 'Capa Cignídeos', start: '08/03', end: '08/25', peak: 'Aug 17', rise: 286, declination: 59, speed: 25, zhr: '3', rating: 'Weak with medium, bright speeds'},

    { name: 'Alfa Aurigídeos', start: '08/25', end: '09/28', peak: 'Sep 1', rise: 91, declination: 39,  speed: 66, zhr: '6', rating: 'Average with very fast and persistent meteors'},
    
    { name: 'Perseidas de Setembro', start: '09/05', end: '10/10', peak: 'Sep 8', rise: 48, declination: 40, speed: 64, zhr: '5', rating: 'Average with fast and persistent meteors'},
    
    { name: 'Táuridas do Sul', start: '09/10', end: '11/20', peak: 'Oct 10', rise: 32, declination: 9, speed: 27, zhr: '5', rating: 'Weak'},

    { name: 'Delta Aurigídeos', start: '09/22', end: '10/23', peak: 'Oct 10', rise: 84, declination: 44, speed: 64, zhr: '2', rating: 'Weak'},

    { name: 'Oriónidas', start: '10/02', end: '11/07', peak: 'Oct 21', rise: 95, declination: 16, speed: 66, zhr: '25', rating: 'Strong with fast and persistent meteors'},
    
    { name: 'Dracónidas', start: '10/06', end: '10/10', peak: 'Oct 8', rise: 262, declination: 54, speed: 20, zhr: 'Variable', rating: 'Irregular'},
    
    { name: 'Épsilon Geminídeos', start: '10/14', end: '10/27', peak: 'Oct 18', rise: 102, declination: 27, speed: 70, zhr: '3', rating: 'Weak'},

    { name: 'Leo Minorídeos', start: '10/21', end: '10/23', peak: 'Oct 22', rise: 162, declination: 37, speed: 62, zhr: '2', rating: 'Weak'},
    
    { name: 'Táuridas do Norte', start: '11/01', end: '11/25', peak: 'Nov 12',  rise: 58, declination: 22,  speed: 29, zhr: '5', rating: 'Average with very slow but bright meteors'},
    
    { name: 'Leónidas', start: '11/14', end: '11/21', peak: 'Nov 17', rise: 152, declination: 22, speed: 71, zhr: 'Variable', rating: 'Irregular with very fast meteors, peaking at 33 in 33 years'},
    
    { name: 'Alfa Monocerotídeos', start: '11/15', end: '11/25', peak: 'Nov 21', rise: 117, declination: 1, speed: 65, zhr: 'Variable', rating: 'Irregular'},
    
    { name: 'Monocerotídeos', start: '11/27', end: '12/17', peak: 'Dec 8', rise: 100, declination: 8, speed: 42, zhr: '2', rating: 'Weak'},
    
    { name: 'Fenícidas', start: '11/28', end: '12/09', peak: 'Dec 6', rise: 18, declination: -53, speed: 18, zhr: 'Variable', rating: 'Irregular'},
    
    { name: 'Quadrântidas', start: '11/28', end: '01/12', peak: 'Jan 4', rise: 230, declination: 49, speed: 41, zhr: '120', rating: 'Strong with medium speeds'},
    
    { name: 'Pupidas-Velidas', start: '12/02', end: '12/16', peak: 'Dec 12', rise: 123, declination: -45, speed: 40, zhr: '10', rating: 'Medium'},

    { name: 'Sigma Hidrídeos', start: '12/03', end: '12/15', peak: 'Dec 12', rise: 127, declination: 2, speed: 58, zhr: '3', rating: 'Weak'},
    
    { name: 'Leo Minorídeos de Dezembro', start: '12/05', end: '02/04', peak: 'Dec 19', rise: 161, declination: 30, speed: 64, zhr: '5', rating: 'Medium'},
    
    { name: 'Gemínidas', start: '12/07', end: '12/17', peak: 'Dec 14', rise: 112, declination: 33, speed: 35, zhr: '120', rating: 'Strong with medium speeds, white and numerous meteors'},
    
    { name: 'Coma Berenicídeos', start: '12/12', end: '01/23', peak: 'Dec 20', rise: 175, declination: 18,  speed: 65, zhr: '3', rating: 'Weak'},
    
    { name: 'Úrsidas', start: '12/17', end: '12/26', peak: 'Dec 22', rise: 217, declination: 76, speed: 33, zhr: '10', rating: 'Medium'}
]

export default meteor_shower
