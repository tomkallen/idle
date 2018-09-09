import images from '../ui/burgersBase64'
import { getId } from './utils'

export default [
  {
    id: getId(),
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
    id: getId(),
    count: 0,
    name: 'Educated burgher',
    description: 'Been to school. Can read, write and knows where the church is. Spends all their time reading or collecting taxes so can not fight.',
    image: images.educated,
    consumes: [
      {type: 'wheat', amount: 2.25}
    ],
    produces: [{type: 'gold', amount: 1.25}],
    combatant: false
  },
  {
    id: getId(),
    count: 0,
    name: 'Cleric',
    description: 'Educated burgher that read just one book. Does not fight but can bless others to do so.',
    image: images.cleric,
    consumes: [
      {type: 'wheat', amount: 3.5}
    ],
    produces: [{type: 'gold', amount: 2.15}],
    combatant: false
  }
]