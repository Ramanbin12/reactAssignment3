import React from 'react'
import SigninComponent from '../../common/ComponentCategories/SubComponents/SigninComponent/SigninComponent'
import { ComponentTopNavbar, ComponentCategories, ComponentFooter} from '../../common'

const SignInPage = () => {
  return (
    <div>
          <ComponentTopNavbar />
      <ComponentCategories />
<SigninComponent/>     
<ComponentFooter />

    </div>
  )
}

export default SignInPage
