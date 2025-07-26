import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { About } from './components/about/about';
import { Portfolio } from './components/portfolio/portfolio';
import { Contact } from './components/contact/contact';
import { Default } from './components/default/default';
import { NotFound } from './components/not-found/not-found';

export const routes: Routes = 
[
    {path:'',component:Default,title:"Home"},
    {path:'about',component:About,title:"About"},
    {path:'portflio',component:Portfolio,title:"Portfolio"},
    {path:'contact',component:Contact,title:"Contact"},
    {path:'**',component:NotFound,title:"Not Found"},
];
