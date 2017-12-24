import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { connect } from 'react-redux';
import { bindActionCreators } from "redux";


import { todos_add_todo, todos_finishTodo, todos_removeTodo, todos_toggle_edit_todo, todos_change_edit_todo ,
	todos_confirm_edit_todo, todos_increment, todos_decrement, todos_increment_achat, todos_decrement_achat, todos_valider_achat
	} from "./services/todos/actions";

//import { count_increment, count_decrement } from "./services/count/actions";

class App extends Component {
	state = {
    items: [],
    text:"",
    nom:"",
    description:"",
    prix:"",
    image:"",
	validation:false,
	quantite:0,
	prixPanier: 0,
	}

  refresh = () => {
    this.setState({})
  }

	render() {
		return (
			<div className="App">
				<body>
				<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<h1>{this.state.text}</h1>
				</header>
				{

				this.state.validation ?
				<div>
				<div className="Store">
				<h1> Ajouter </h1>

				              

				        <div> 
				        <input
				            type='text'
				            value={this.state.nom}
				            placeholder = "Nom"
				            onChange={(e) => this.setState({ nom: e.target.value })}

				          /><br/>
				        <input
				            type='text'
				            value={this.state.description}
				            placeholder = "Description"
				            onChange={(e) => this.setState({ description: e.target.value })}

				          /><br/>
				        <input
				            type= "number" 
				            value={this.state.prix}
				            placeholder = "Prix"
				            onChange={(e) => this.setState({ prix: e.target.value })}

				          /><br/>
				        <input
				            type= "text" 
				            value={this.state.image}
				            placeholder = "Image"
				            onChange={(e) => this.setState({ image: e.target.value })}

				        /><br/>
				        <button onClick = {() => { 
				            this.props.todos_add_todo({
				            nom: this.state.nom,
				            description: this.state.description,
				            prix: this.state.prix,
				            image: this.state.image,
				          });
				          this.refresh();
				              }}>
				            Ajouter
				        </button>

					{
						this.props.todos.items.map((item, index) => {

							var indexEdit = this.props.todos.edits.findIndex((obj) => obj.id == item.id);

							return (
							
								<div className="test">
								
								<div key={item.id}>
											{ indexEdit > -1 ?
												<div>
												<input
										            type='text'
										            value={this.state.nom}
										            placeholder = "Nom"
										            onChange={(e) => this.setState({ nom: e.target.value })}

										          /> <br/>
										        <input
										            type='text'
										            value={this.state.description}
										            placeholder = "Description"
										            onChange={(e) => this.setState({ description: e.target.value })}

										          /><br/>
										        <input
										            type= "number" 
										            value={this.state.prix}
										            placeholder = "Prix"
										            onChange={(e) => this.setState({ prix: e.target.value })}

										          /><br/>
										        <input
										            type= "text" 
										            value={this.state.image}
										            placeholder = "Image"
										            onChange={(e) => this.setState({ image: e.target.value })}

										        /><br/>

										        </div>

												:
											<div>
												<span>Nom : {item.nom}</span><br/>
						                          <span>Description : {item.description}</span><br/>
						                          <span>Prix : {item.prix}</span><br/>
						                          <img src = { item.image }/><br/>
						                          <span>Quantite : { item.quantite }</span><br/>

											</div>
											}
										
										{
											indexEdit == -1 ?
												<span>

													<button
														
														onClick={() => this.props.todos_toggle_edit_todo(item)}
													>
														Editer
													</button><br/>
													<button
														
														onClick={() => this.props.todos_increment({index: index})}
													>
														Ajouter
													</button>
													<button
														
														onClick={() => this.props.todos_decrement({index: index})}
													>
														Retirer
													</button><br/>
													<button
														
														onClick={() => this.props.todos_removeTodo(item)}
													>
														Supprimer
													</button> <br/>
												</span>
											:
												<span><br/>
													<button
														
														onClick={() => this.props.todos_toggle_edit_todo(item)}
													>
														Annuler
													</button>

													<button
														
														onClick={() => this.props.todos_change_edit_todo(
														{ 
										            	nom: this.state.nom,
											            description: this.state.description,
											            prix: this.state.prix,
											            image: this.state.image, }
										        )}
													>
														Confirmer
													</button>
												</span>
										}
								</div>
							
								</div>


							
							


							)
						})
					}
					
				</div>
				</div>

				
				
				<div className = "Catalogue">
				    <h1>Catalogue :</h1>
						{
							this.props.todos.items.map((item, index) => {
								return (
									<div key={item.id}>		
									<span>Nom : {item.nom}</span><br/>
						            <span>Description : {item.description}</span><br/>
					                <span>Prix : {item.prix}</span><br/>
        	                          <img src = { item.image }/><br/>
						              <span>Quantite : { item.quantite }</span><br/>

									{
									item.quantite>0 ?
										<button onClick={ () => {
												this.props.todos_increment_achat({index: index})
												this.props.todos_decrement({index: index})
															
														}
													}	
												>
										Ajouter au panier
										</button>
									:
										null
									}
									</div>
									
								)
							})
						}
					

				    </div>
				    <div className = "Panier">
				    <h1>Panier :</h1>	
				    	{
				    	this.props.todos.items.map((item, index) => {
							return (
								<div key={item.id}>	
								{
								    item.acheter>0 
								    ?
								    <div>	
									<span>Nom : {item.nom}</span><br/>
						            <span>Description : {item.description}</span><br/>
					                <span>Prix : {item.prix*item.acheter}</span><br/>
        	                         <img src = { item.image }/><br/>
						             <span>Quantite : { item.acheter }</span><br/>


								    	<button onClick={ () => {
								    		this.props.todos_increment({index: index})
								    		this.props.todos_decrement_achat({index: index})
								    	}}> 
								    	- 
								    	</button>
								    	{
								    		item.quantite>0 ?
								    	<button onClick={ () => {
												this.props.todos_increment_achat({index: index})
												this.props.todos_decrement({index: index})
															
														}
													}	
												>
										+
										</button>
										:
										null
										}<br/>
										<button onClick={() => {
											this.props.todos_valider_achat({index: index})
										}}>Valider le panier
										</button>
										</div>
										
										:

										null
										
										
									}
									</div>

								)
						})
					}
				    

				    </div>
				</div>

				:
				<div>	
	              <h1> Nom du magasin : </h1> 
					
						<input type="text" value={this.state.text} onChange={(e) => this.setState({ text: e.target.value })} />
					
					<div>
						<button
							className="button"
							onClick={() => this.setState({
								validation:true
							})}
						>
							Bienvenu dans ta boutique le s
						</button>
					</div>
					</div>
	          }

				

				</body>
			</div>


		);
	}

}


const mapStateToProps = (state) => ({
	
	todos: state.todos,
	
});


const mapActionsToProps = (dispatch) => ({
	todos_add_todo: bindActionCreators(todos_add_todo, dispatch),
	todos_finishTodo: bindActionCreators(todos_finishTodo, dispatch),
	todos_removeTodo: bindActionCreators(todos_removeTodo, dispatch),
	todos_toggle_edit_todo: bindActionCreators(todos_toggle_edit_todo, dispatch),
	todos_change_edit_todo: bindActionCreators(todos_change_edit_todo, dispatch),
	todos_confirm_edit_todo: bindActionCreators(todos_confirm_edit_todo, dispatch),
	todos_increment: bindActionCreators(todos_increment, dispatch),
	todos_increment_achat: bindActionCreators(todos_increment_achat, dispatch),
	todos_decrement: bindActionCreators(todos_decrement, dispatch),
	todos_decrement_achat: bindActionCreators(todos_decrement_achat, dispatch),
	todos_valider_achat: bindActionCreators(todos_valider_achat, dispatch),
});


export default connect(mapStateToProps, mapActionsToProps)( App );
