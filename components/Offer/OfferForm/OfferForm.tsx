import React, { ChangeEvent, FormEvent, useState } from 'react';
import { FormType, HTMLFormControlElement } from '../../../shared/types/form.type';
import { updateForm } from '../../../shared/form-utils';
import Input from '../../UI/Input/Input';
import Button from '../../UI/Button/Button';
import { useCreateOffer } from '../../../shared/api/offer/createOffer/createOffer';
import Spinner from '../../UI/Spinner/Spinner';
import ServerErrors from '../../UI/ServerErrors/ServerErrors';

const OfferForm: React.FC = () => {

  // Form setup
  const initialForm: FormType = {
    title: {
      elementType: 'input',
      elementConfig: {
        type: 'text',
        placeholder: 'Mon annonce'
      },
      label: 'Titre',
      value: '',
      validation: {
        required: true,
        minLength: 3,
        maxLength: 30,
      },
      valid: false,
      touched: false
    },
    description: {
      elementType: 'textarea',
      elementConfig: {
        placeholder: 'Vélo bleu en bon état, à récupérer sur place...'
      },
      label: 'Description',
      value: '',
      validation: {
        required: true,
        minLength: 3,
        maxLength: 400,
      },
      valid: false,
      touched: false
    },
  };

  const [controls, setControls] = useState<FormType>(initialForm);
  const [formIsValid, setFormIsValid] = useState<boolean>(false);

  const {
    data,
    loading,
    errors,
    triggerQuery: triggerCreateOffer,
  } = useCreateOffer({
    offer: {
      title: controls.title.value as string,
      description: controls.title.value as string,
    },
    autoTrigger: false,
  });

  // Form update validation
  const inputChangedHandler = (
    event: ChangeEvent<HTMLFormControlElement> | CustomEvent,
    controlName: string
  ) => {

    if('persist' in event) {
      event.persist();
    }

    const { updatedForm, updatedFormValidity } = updateForm(
      event, controlName, controls
    );

    setControls(updatedForm);
    setFormIsValid(updatedFormValidity);
  };

  // Submit form
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    triggerCreateOffer();
  }

  // Handle display

  // todo: type this
  const formElementArray = [];
  for (const key in controls) {
    formElementArray.push({
      id: key,
      config: controls[key]
    })
  }

  let formDisplay;

  if (loading) {
    formDisplay = <Spinner />;
  } else if (data?.createOffer) {
    formDisplay = (
      // todo: see offer link
      <p>L'annonce a bien été créée.</p>
    );
  } else {
    formDisplay = (
      <form onSubmit={handleSubmit}>

        <div className="part-big">
          {
            formElementArray.map(formElement => (
              <Input
                key={formElement.id}
                config={formElement.config}
                changed={(
                  event: ChangeEvent<HTMLFormControlElement> | CustomEvent
                ) => inputChangedHandler(event, formElement.id)}
              />
            ))
          }
        </div>

        <div className="part">
          <Button
            type="submit"
            disabled={!formIsValid}>
            Créer l'annonce
          </Button>
        </div>

      </form>
    );

  }

  return (
    <>
      {errors && (
        <ServerErrors errors={errors} />
      )}

      {formDisplay}
    </>
  );
}

export default OfferForm;
