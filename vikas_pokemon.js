class Pokemon {
	constructor(name, type, hp, def, atk, legend) {

		if (typeof(name) !== 'string') { throw new TypeError("Wrong type for name given in constructor!"); }
		if (typeof(type) !== 'string') { throw new TypeError("Wrong type for type given in constructor!"); }
		if (typeof(hp) !== 'number') { throw new TypeError("Wrong type for hp given in constructor!"); }
		if (typeof(def) !== 'number') { throw new TypeError("Wrong type for def given in constructor!"); }
		if (typeof(atk) !== 'number') { throw new TypeError("Wrong type for atk given in constructor!"); }
		if (typeof(legend) !== 'boolean') { throw new TypeError("Wrong type for legend given in constructor!"); }

		this.name = name;
		this.type = type;
		this.hp = hp;
		this.def = def;
		this.atk = atk;
		this.legend = legend;

		if (typeof(Pokemon.all) === "undefined") {
			Pokemon.all = [this];
		} else {
			Pokemon.all.push(this);
		}
	}

	attack(pokemon) {
		if (pokemon.def >= this.atk) { return }
		pokemon.hp -= (this.atk - pokemon.def);
	}

	aliveCheck() {
		return this.hp > 0;
	}
}