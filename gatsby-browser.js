//import 'firebase/auth'
// import firebase from "firebase/compat/app";
// import "firebase/compat/auth";
// import "firebase/compat/firestore";

import "firebase/auth"
import "firebase/firestore"
import "firebase/functions"

import React from 'react'
import AuthProvider from './src/context/auth'

export const wrapRootElement = ({ element }) => (
    <AuthProvider>
        {element}
    </AuthProvider>
)