import React, {Component} from "react";
import Shop from "./Shop";

class ShopPost extends Component{
	state ={
		listProduct:[]
	}

	ambilDataDariServerAPI(){
		fetch('http://localhost:3001/product')
			.then(response => response.json())
			.then(jsonHasilAmbilDariAPI =>{
				this.setState({
					listProduct: jsonHasilAmbilDariAPI
				})
			})
	}

	componentDidMount(){
		this.ambilDataDariServerAPI()
	}

	handleHapusProduct = (data) =>{
		fetch(`http://localhost:3001/product/${data}`, {method:'DELETE'})
			.then(res =>{
				this.ambilDataDariServerAPI()
			})
	}

	handleTombolSimpan = () => {
		fetch('http://localhost:3002/keranjang', {
			method: 'post',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(this.state.insertKranjang)
		})
			.then((Response) => {
				this.ambilDataDariServerAPI();
			});
	}

	render(){
		return(
			<div className="post-Product">
			 	<h2>Daftar Product</h2>
			 	{
					this.state.listProduct.map(Product => {
						return <Shop key={Product.id} pid={Product.id} Pname={Product.nama} Pharga={Product.harga} 
									 Pgambar={Product.gambar} Pstok={Product.stok} beliProduct={this.handleTombolSimpan}/>
			 		})
			 	}
			</div>
		)
	}
}

export default ShopPost;