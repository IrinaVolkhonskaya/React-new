import React from 'react';
import Panel from './Panel';
import ProfileDetails from './ProfileDetails';
import TechList from './TechList';
import ProductList from './ProductList';
import products from '../products.json';

const tech = [
    { id: 'id-1', name: 'JS'},
    { id: 'id-2', name: 'React'},
    { id: 'id-3', name: 'React Router'},
    { id: 'id-4', name: 'Redax'},
];

// const details1 = { name: 'Bob Ross', age: 100 };
// const details2 = { name: 'Mango', age: 20 };

const App = () => (
<div>
    <TechList items={tech} />
    <ProductList products={products} />
    {/* <Panel title="Panel 1">
        <ProfileDetails name={details1.name} age={details1.age} />
    </Panel>

    <Panel title="Panel 2">
        <ProfileDetails name={details2.name} age={details2.age} />
    </Panel> */}
</div>
);

export default App;