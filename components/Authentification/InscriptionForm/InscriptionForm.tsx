import React, { ChangeEvent, FormEvent, useState } from 'react';
import { FormType, HTMLFormControlElement } from '../../../shared/types/form.type';
import { updateForm } from '../../../shared/form-utils';
import Spinner from '../../UI/Spinner/Spinner';
import Input from '../../UI/Input/Input';
import Button from '../../UI/Button/Button';
import Link from 'next/link';
import Title from '../../UI/Title/Title';
import { useRegister } from '../../../shared/api/user/register/register';
import { useRouter } from 'next/router';
import ServerErrors from '../../UI/ServerErrors/ServerErrors';

const InscriptionForm: React.FC = () => {

  const router = useRouter();

  // Form setup
  const initialForm: FormType = {
    username: {
      elementType: 'input',
      elementConfig: {
        type: 'text',
        placeholder: 'Jean Dupont'
      },
      label: 'Nom d\'utilisateur',
      value: '',
      validation: {
        required: true,
        minLength: 3,
        maxLength: 15,
      },
      valid: false,
      touched: false
    },
    email: {
      elementType: 'input',
      elementConfig: {
        type: 'email',
        placeholder: 'jeandupont@domain.com'
      },
      label: 'E-mail',
      value: '',
      validation: {
        required: true,
        isEmail: true
      },
      valid: false,
      touched: false
    },
    password: {
      elementType: 'input',
      elementConfig: {
        type: 'password',
        placeholder: '******'
      },
      label: 'Mot de passe',
      value: '',
      validation: {
        required: true,
        minLength: 6,
        maxLength: 20,
      },
      valid: false,
      touched: false
    },
    confirmPassword: {
      elementType: 'input',
      elementConfig: {
        type: 'password',
        placeholder: '******'
      },
      label: 'Confirmer le mot de passe',
      value: '',
      validation: {
        required: true,
        minLength: 6,
        maxLength: 20,
        isSame: 'password',
      },
      valid: false,
      touched: false
    }
  };

  const [controls, setControls] = useState<FormType>(initialForm);
  const [formIsValid, setFormIsValid] = useState<boolean>(false);

  // Register hook
  const {
    data,
    loading,
    errors,
    triggerQuery: triggerRegister
  } = useRegister({
    username: controls.username.value as string,
    email: controls.email.value as string,
    password:  controls.password.value as string,
    autoTrigger: false
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
    triggerRegister();
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
  } else if (data?.register) {
    router.push('/');
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
            S'inscrire
          </Button>
        </div>

        <p>
          <Link href="/connexion"><a>J'ai déjà un compte</a></Link>
        </p>
      </form>
    );
  }

  return (
    <>
      <Title type="h1" style="title1">
        Connexion
      </Title>

      {errors && (
          <ServerErrors errors={errors} />
      )}

      {formDisplay}

    </>
  );
}

export default InscriptionForm;
