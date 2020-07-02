import React from 'react';

import UserPageTemplate from 'templates/UserPageTemplate';
import Form from 'components/molecules/Form/Form';

import undrawImage from 'assets/image/undraw.svg';

const Home = () => (
  <UserPageTemplate>
    <Form />
    <div>
      <img src={undrawImage} alt="" />
    </div>
  </UserPageTemplate>
);

export default Home;
