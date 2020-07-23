import React from 'react';
import { ApiResponseError } from '../../../shared/api/api.types';
import classes from './ServerErrors.module.css';

interface ServerErrorsProps {
  errors: ApiResponseError
}

const ServerErrors: React.FC<ServerErrorsProps> = ({errors}) => {

  let title;
  let template;

  if (errors.errorList?.length && errors.errorList.length > 1) {

    title = <p className={classes.serverError__title}>Erreurs</p>;

    template = (
      <ul className={classes.serverError__list}>
        {errors.errorList.map(errorItem => (
          <li key={errorItem.message} className={classes.serverError__listItem}>
            <p className={classes.serverError__message}>
              {errorItem.message}
            </p>
          </li>
        ))}
      </ul>
    );
  } else if (errors.message) {

    title = <p className={classes.serverError__title}>Erreur</p>;

    template = (
      <p className={classes.serverError__message}>
        {errors.message}
      </p>
    );
  } else {
    throw new Error('[ServerErrors component] The errors item does not seem to be a correct ApiResponseError entity');
  }

  return (
    <div className={classes.serverError}>
      {title}
      {template}
    </div>
  );
}

export default ServerErrors;
