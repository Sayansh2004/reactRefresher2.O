redux store is a big Javascript object which is placed at central place and comprises a all the data.

we have some parts of redux store which is known as slice . WE can create as many slice as we wanted for ex. cart slice for cart items while userSlice for storing user info.

## Writing to Store
now inorder to use the change in slice we cannot directly make the change we have to dispatch an action which calls a reducer function in this way we write to store.

## Reading from store
we use selector to communicate with the store and that selector will give us the store data and this phenomena is known as subscribe to our store.


## Example


suppose on click on add button items get added into the cart and this only happens as following:

                         (reducer)
ADD->A(dispatch action)->   fn()    -> Store(slice)------------------------------------
                                                                                       |
                                              cart gets updated<----- selector < --    |
                                                                      (subscribe)