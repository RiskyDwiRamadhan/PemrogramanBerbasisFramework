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

	render(){
		return(
			<div className="post-Product">
			 	<h2>Daftar Product</h2>
			 	{
					this.state.listProduct.map(Product => {
						return <Shop key={Product.id} pid={Product.id} Pname={Product.nama} Pharga={Product.harga} 
									 Pgambar={Product.gambar} Pstok={Product.stok}/>
			 		})
			 	}
			</div>
		)
	}
}

export default ShopPost;