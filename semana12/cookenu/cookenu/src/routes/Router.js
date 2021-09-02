import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import AddRecipesPage from '../pages/AddRecipesPage/AddRecipesPage';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import LoginPage from '../pages/LoginPage/LoginPage';
import RecipeDetailPage from '../pages/RecipeDetailPage/RecipeDetailPage';
import RecipeListPage from '../pages/RecipeListPage/RecipeListPage';
import SignUpPage from '../pages/SignUpPage/SignUpPage';
import Header from '../components/Header/Header';




const Router = () => {
    return (
    <BrowserRouter>
    <Header>
        <Switch>
            <Route exact path="/login">
                <AddRecipesPage />
            </Route>

            <Route exact path="/cadastro">
                <LoginPage />
            </Route>

            <Route exact path="/">
                <RecipeDetailPage />
            </Route>

            <Route exact path="/adicionar-receita">
                <RecipeListPage />
            </Route>

            <Route exact path="/detalhe/:id">
                <SignUpPage />
            </Route>
            <Route>
                <ErrorPage />
            </Route>
            </Switch>
            </Header>
        </BrowserRouter>
    )
}

export default Router;

