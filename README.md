# Good-Dog
Solo Project #1 

COLORS: 
muted green apple green - 8B9A46
dark purple - 371B58
cool tone purple - 4C3575
cool tone light purple - 5B4B8A
light purple - 7858A6
brighter muted orange - F58840
night gray - 525252
light gray - BBBBBB

addForm

import React, { useState } from 'react';

//  importing utils
import Input from '../UI/Input';
//  importing styles
import classes from './AddForm.module.scss';
import Button from '../UI/Button';

const AddForm = (props) => {
  const [error, setError] = useState(false);

  const submitHandler = async (event) => {
    event.preventDefault();

    const firstName = event.target[0].value;
    const lastName = event.target[1].value;

    const response = await fetch('/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/JSON',
      },
      body: JSON.stringify({
        firstName: firstName,
        lastName: lastName,
        team_id: props.team._id,
      }),
    });

    if (response.ok) {
      const data = await response.json();
      const newUsers = [...props.users];
      newUsers.push(data);

      props.updateUsers(newUsers);
      setError(false);
      props.onClose();
    } else {
      setError(true);
    }
  };
  return (
    <React.Fragment>
      <h2 className={classes.h2}>Add User</h2>
      <form className={classes.form} onSubmit={submitHandler}>
        <Input
          type='text'
          id='firstName'
          labelClass={classes.label}
          inputClass={classes.input}>
          First Name
        </Input>
        <Input
          type='text'
          id='lastName'
          labelClass={classes.label}
          inputClass={classes.input}>
          Last Name
        </Input>
        <Button className={classes.button}>Create</Button>
        {error && <p className={classes.p}>Something went wrong!</p>}
      </form>
    </React.Fragment>
  );
};

export default AddForm;



ADD MODAL 

import React from 'react';

//  importing children
import AddForm from '../forms/AddForm';
//  importing utils
import Modal from '../UI/Modal';

const AddModal = (props) => {
  return (
    <Modal onClose={props.onClose}>
      <AddForm
        team={props.team}
        users={props.users}
        updateUsers={props.updateUsers}
        onClose={props.onClose}
      />
    </Modal>
  );
};

export default AddModal;

CREATe MODAL 

import React from 'react';

//  importing children
import CreateForm from '../forms/CreateForm';
//  importing utils
import Modal from '../UI/Modal';
//  importing styles
import classes from './CreateModal.module.scss';

const CreateModal = (props) => {
  return (
    <Modal onClose={props.onClose} className={classes.modal}>
      <CreateForm
        onClose={props.onClose}
        users={props.users}
        create={props.create}
        updateUsers={props.updateUsers}
      />
    </Modal>
  );
};

export default CreateModal;

SIGNUP MODAL
import React from 'react';

//  importing children
import SignupForm from '../forms/SignupForm';
//  importing utils
import Modal from '../UI/Modal';

const SignupModal = (props) => {
  return (
    <Modal onClose={props.onClose}>
      <SignupForm updateTeam={props.updateTeam} />
    </Modal>
  );
};

export default SignupModal;

CREATE MODAL SCSS

.modal {
  height: 45%;
}


SIGN UP FORM:

import React, { useState } from 'react';

//  importing utils
import Input from '../UI/Input';
//  importing styles
import classes from './SignupForm.module.scss';
import Button from '../UI/Button';

const SignupForm = (props) => {
  const [error, setError] = useState(false);

  const submitHandler = async (event) => {
    event.preventDefault();

    const name = event.target[0].value;
    const password = event.target[1].value;

    const response = await fetch('/teams', {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/JSON',
      },
      body: JSON.stringify({
        name: name,
        password: password,
      }),
    });

    if (response.ok) {
      // setError(false);
      const data = await response.json();
      props.updateTeam(data);
    } else {
      setError(true);
    }
  };

  return (
    <React.Fragment>
      <h2 className={classes.h2}>Create a Team</h2>
      <form className={classes.form} onSubmit={submitHandler}>
        <Input
          type='text'
          id='username'
          labelClass={classes.label}
          inputClass={classes.input}>
          TEAM NAME
        </Input>
        <Input
          type='password'
          id='password'
          labelClass={classes.label}
          inputClass={classes.input}>
          PASSWORD
        </Input>
        <Button className={classes.button}>Sign Up</Button>
        {error && <p className={classes.p}>Something went wrong!</p>}
      </form>
    </React.Fragment>
  );
};

export default SignupForm;

SIGN UP FORM SCSS

@import '../../assests//colors.scss';
@import '../../assests//constants.scss';

.h2 {
  font-size: 40px;
  font-family: 'Courier New', Courier, monospace;
  font-weight: bold;

  text-align: center;
}

.form {
  height: 15rem;

  margin-top: 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}

.label {
  width: 15rem;
  height: 2rem;

  font-family: 'Courier New', Courier, monospace;
  font-size: 32px;
  text-align: center;

  margin-bottom: 1rem;
}

.input {
  width: 15rem;
  height: 2rem;

  color: $gray;
  font-size: 16px;
  text-align: center;

  margin-bottom: 1rem;
}

.button {
  background-color: $navy;
  color: $button-color;

  border: 1px solid transparent;
  border-radius: $button-border-radius;
  padding: 0.5rem 1rem;
}

.button:hover {
  cursor: pointer;
}

.p {
  margin: 8px 0;
  color: red;

  font-size: 16px;
}

PRE-LOGIN:

import React, { useState } from 'react';

//  importing children
import NavBar from './navbar/NavBar';

//  importing utils
import LoginModal from '../layout/LoginModal';
import SignupModal from '../layout/SignupModal';


const PreLogin = (props) => {
  return (
    <React.Fragment>
      {props.loggingIn && (
        <LoginModal
          onClose={() => {
            props.setLoggingIn(false);
          }}
        />
      )}
      {props.signup && (
        <SignupModal
          onClose={() => {
            props.setSignup(false);
          }}
          updateTeam={props.updateTeam}
        />
      )}
      <NavBar
        login={() => {
          props.setLoggingIn(true);
        }}
        signup={() => {
          props.setSignup(true);
        }}
      />
    </React.Fragment>
  );
};

export default PreLogin;

CREATE TASK FORM:
import React from 'react';

//  importing utils
import Input from '../UI/Input';
//  importing styles
import classes from './CreateForm.module.scss';
import Button from '../UI/Button';

const CreateForm = (props) => {
  const submitHandler = async (event) => {
    event.preventDefault();

    //get data from form
    const name = event.target[0].value;
    const date = event.target[1].value;
    const description = event.target[2].value;

    const newTask = { name, date, description };
    const user = props.users[props.create];
    const newTasks = [...user.tasks];
    newTasks.push(newTask);

    //update data in db
    const response = await fetch('/users', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'Application/JSON',
      },
      body: JSON.stringify({ _id: user._id, tasks: newTasks }),
    });

    const updatedUser = await response.json();

    const updatedUsers = props.users.slice();
    updatedUsers[props.create] = updatedUser;

    props.updateUsers(updatedUsers);

    props.onClose();
  };
  return (
    <React.Fragment>
      <h2 className={classes.h2}>Create Task</h2>
      <form className={classes.form} onSubmit={submitHandler}>
        <Input
          type='text'
          id='task'
          maxLength='25'
          labelClass={classes.label}
          inputClass={classes.input}>
          Task Name
        </Input>
        <Input
          type='date'
          id='date'
          labelClass={classes.label}
          inputClass={classes.input}>
          Deadline
        </Input>
        <label htmlFor='description' className={classes.label}>
          Description
        </label>
        <textarea
          id='description'
          className={classes.textarea}
          rows='3'
          cols='50'></textarea>
        <Button className={classes.button}>Create</Button>
      </form>
    </React.Fragment>
  );
};

export default CreateForm;
