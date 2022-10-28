import express from "express";

const router = express.Router();

const products = [
    {
        title:"Regla",
        price:123.45,
        thumbnail:"https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png",
        id:1
    },
    {
        title:"Regla2",
        price:123.45,
        thumbnail:"https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png",
        id:2
    }
]

router.get('/products', (_req, res) => {
    res.status(200).json(products)
});

router.get('/products/by/id', (req, res) => {
    try{
        const element = products.find(product => product.id == req.body.id);

        if(element){
            res.status(200).json(element)
        }
        else{
            res.status(404).json({ error : 'producto no encontrado' })
        }
    }
    catch(error){
        res.status(500).json(error)
    }
});

router.post('/addProduct', (req, res) => {
    try{
        console.log(req.body)

        const id = products.length;
        const obj = [req.body];
    
        obj.map((item,index)=> {
            item.id = id + (index + 1)
        });
    
        products.push(...obj)
        res.status(200).json({products})
    }
    catch(err){
        res.status(500).json(err)
    }

});

router.put('/updateProduct', (req, res) => {
    
    try{
        const obj = req.body;
    
        products.splice(parseInt(obj.id - 1), 1);
        products.push(obj)
    
        res.status(200).json(products);
    }
    catch(err){
        res.status(500).json(err)
    }

});

router.delete('/deleteProduct', (req, res) => {
    try{
        products.splice(parseInt(req.body.id - 1), 1);

        res.status(200).json(products);
    }
    catch(err){
        res.status(500).json(err)
    }
});

export default router;