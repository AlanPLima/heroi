class Heroi {
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
  
    atacar() {
      let ataque = '';
  
      switch (this.tipo) {
        case 'mago':
          ataque = 'usou magia';
          break;
        case 'guerreiro':
          ataque = 'usou espada';
          break;
        case 'monge':
          ataque = 'usou artes marciais';
          break;
        case 'ninja':
          ataque = 'usou shuriken';
          break;
        default:
          ataque = 'usou um ataque indefinido';
      }
  
      console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
  }
  
  // name,age,hero
  const heroi1 = new Heroi('Lima', 32, 'guerreiro');
  const heroi2 = new Heroi('Sulivan', 30, 'mago');
  const heroi3 = new Heroi('Garcia', 29, 'monge');
  const heroi4 = new Heroi('Junior', 21, 'ninja');
  
  heroi1.atacar();
  heroi2.atacar();
  heroi3.atacar();
  heroi4.atacar();
  