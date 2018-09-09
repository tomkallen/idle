import images from '../ui/burgersBase64'

export default [
  {
    id: 0,
    count: 0,
    name: 'Commoner',
    description: 'Just a common folk. Can work, can fight, can pay taxes.',
    image: images.commoner,
    consumes: [
      {type: 'wheat', amount: 1.75}
    ],
    produces: [{type: 'gold', amount: 1}],
    combatant: true,
    hp: 100,
    damage: 5,
    critical: .05
  },
  {
    id: 1,
    count: 0,
    name: 'Educated burger',
    description: 'Been to school. Can read, write and knows where the church is. Spends all their time reading or collecting taxes so can not fight.',
    image: images.educated,
    consumes: [
      {type: 'wheat', amount: 2.25}
    ],
    produces: [{type: 'gold', amount: 1.25}],
    combatant: false
  }
]