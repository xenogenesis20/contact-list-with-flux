const getState = ({ getStore, setStore }) => {
	return {
		store: {
			//Your data structures, A.K.A Entities
			contacts: []
		},
		actions: {
			//(Arrow) Functions that update the Store
			// Remember to use the scope: scope.state.store & scope.setState()
			getFetch: () => {
				fetch("https://assets.breatheco.de/apis/fake/contact/agenda/pizza")
					.then(response => {
						if (!response.ok) {
							throw Error(response.statusText);
						}
						return response.json();
					})
					.then(data => setStore({ contact: data }))
					.catch(error => console.log("There was an error"));
			},
			postFetch: contact => {
				fetch("https://assets.breatheco.de/apis/fake/contact/", {
					method: "POST", // or 'POST'
					body: JSON.stringify({
						full_name: contact.full_name,
						email: contact.email,
						agenda_slug: "pizza",
						address: contact.address,
						phone: contact.phone
					}), // data can be `string` or {object}!
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(response => {
						if (!response.ok) {
							throw Error(response.statusText);
						}
						return response.json();
					})
					.then(data => console.log(data))
					.catch(error => console.log("There was an error"));
			}
		}
	};
};

export default getState;
