import React from 'react';
import classes from './Headband.module.css'
import Button from '../UI/Button/Button';
import SvgPurse from '../UI/Svg/Purse';
import SvgPaperplaneFlying from '../UI/Svg/PaperplaneFlying';
import SvgSmile from '../UI/Svg/Smile';
import SvgLeaf from '../UI/Svg/Leaf';
import SvgPaperplane from '../UI/Svg/Paperplane';

const Headband: React.FC = () => {

  return (
     <div className={classes.headband}>
       <div className={classes.headband__container}>
         <div className={classes.headband__brand1}>
           <p className={classes.headband__brand1Text}>
             <span>Les objets qui ne vous servent plus </span>
             <span>peuvent faire des heureux</span>
           </p>
           <SvgPurse className={[classes.headband__icon, classes.headband__iconPurse].join(' ')} />
           <SvgPaperplaneFlying className={[classes.headband__icon, classes.headband__iconPaperplaneFlying].join(' ')} />
           <SvgSmile className={[classes.headband__icon, classes.headband__iconSmile].join(' ')} />
         </div>
         <div className={classes.headband__cta}>
           <Button type="a" style="main" href='/inscription' className={classes.headband__ctaButton}>
             Je m'inscris
           </Button>
           <Button type="a" style="alt" href='/connexion' className={classes.headband__ctaButton}>
             J'ai déjà un compte
           </Button>
         </div>
         <div className={classes.headband__brand2}>
           <p className={classes.headband__brand2Text}>
             <span>Facile et </span>
             <SvgLeaf className={[classes.headband__icon, classes.headband__iconLeaf].join(' ')} />
             <span>100% gratuit</span>
           </p>
         </div>
       </div>
     </div>
  );
}

export default Headband;
