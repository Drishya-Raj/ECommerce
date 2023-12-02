import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './components/Home';
import ProductDetails from './components/productDetails';
import MobDetails from './components/mobileDetails';
import ListView from './components/ListView';
import MyCart from './components/MyCart';
import SignUp from './components/signup';

const Router = () => {
    return (
        <BrowserRouter >
            <Routes>
                <Route path='/' element={<SignUp />} />
                <Route path="/home" element={<Main />} />
                <Route path='/mobdetails' element={<MobDetails />} />
                <Route path='/productDetails' element={<ProductDetails />} />
                <Route path='/gridview' element={<MobDetails />} />
                <Route path='/listview' element={<ListView />} />
                <Route path='/myCart' element={<MyCart />} />
            </Routes>
        </BrowserRouter>
    )
}
export default Router;