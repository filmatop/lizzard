import { Species } from './species';
import { FAMILIES } from './mock-families';

const varanFamily = 'Varanidae';
const cameleonFamily = 'Chamaeleonidae'
export const SPECIES: Species[] = [
  { name: 'Comodo dragon',
    family: FAMILIES.find(family => family.name === varanFamily),
    imgUrl: 'https://previews.123rf.com/images/surz/surz1801/surz180101403/94795526-the-fighting-comodo-dragon-varanus-komodoensis-for-domination-it-is-the-biggest-living-lizard-in-the.jpg' }
];
