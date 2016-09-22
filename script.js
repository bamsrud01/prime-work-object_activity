var madrid = {
  teamName: 'Real Madrid',
  sportEu: 'football',
  sportUs: 'soccer',
  country: 'Spain',
  firstYear: 1902,
  topPlayers: ['Cristiano Ronaldo', 'Raul', 'Zinedine Zidane', 'Iker Casillas', 'Santillana'],
  value: '3.65 billion',
  rival: 'Barcelona',
  domestic: 'Liga',
  international: 'EUFA',
  timesWonLiga: 32,
  timesWonEUFA: 11
}
var players = '';
while (madrid.topPlayers.length > 0){
  if (madrid.topPlayers.length > 1) {
    players += (madrid.topPlayers.shift() + ', ');
  } else {
    players += ('and ' + madrid.topPlayers.shift());
  }
}

console.log(madrid.teamName + ' is a very popular ' + madrid.sportEu + '/' + madrid.sportUs + ' team from ' +
madrid.country + '.  The team was founded in ' + madrid.firstYear + ' and is currently one of the most valuable teams, worth $' +
madrid.value + '.  Their main rival is ' + madrid.rival + '.  Some of the most famous players, past and present, are ' + players +
'.  ' + madrid.teamName + ' has won many competitions, having won the ' + madrid.domestic + ', the domestic competition in ' +
madrid.country + ', ' + madrid.timesWonLiga + ' times, and the international ' + madrid.international +
' competition ' + madrid.timesWonEUFA + ' times.');
