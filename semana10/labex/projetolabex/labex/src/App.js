import React from 'react';
import AdminHomePage from './pages/AdminHomePage';
import HomePage from './pages/HomePage';
import ListTripsPage from './pages/ListTripsPage';
import ApplicationFormPage from './pages/ApplicationFormPage';











const  App = () => {
//redenrização condional
// estado que diz qual é a tela que está aparecendo
//  fução para mudar de tela







  return (
    <div>
      
<HomePage></HomePage>
<ListTripsPage></ListTripsPage>

<ApplicationFormPage></ApplicationFormPage>
<AdminHomePage></AdminHomePage>
    </div>
  );
}

export default App;
