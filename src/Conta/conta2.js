export default class Conta{
    static myInstance = null;

    _name = '';
    _login = '';
    _senha = '';
    _saldo = 0;
    _logado = false
    _historico = []

    /**
     * @returns {Conta}
     */

    static getInstance(){
        if(Conta.myInstance == null){
            Conta.myInstance = new Conta()
        }
        return this.myInstance;
    }

    setName(name){
        this._name = name
    }

    getName(){
        return this._name
    }

    setLogin(login){
        this._login = login
    }

    getLogin(){
        return this._login
    }

    setSenha(senha){
        this._senha = senha
    }

    getSenha(){
        return this._senha
    }

    deposito(valor){
        this._saldo += parseFloat(valor)
        this._historico.push('R$' + valor + ' foram adicionados à conta. ')
    }

    saque(valor){
        this._saldo -= parseFloat(valor)
        this._historico.push('R$' + valor + ' foram removidos da conta. ')
    }

    tranferencia(conta, valor){
        conta.deposito(valor)
        this.saque(valor)
    }

    getSaldo(){
        return this._saldo.toFixed(2)
    }

    setHistorico(historico){
        this._historico.push(historico)
    }

    getHistorico(){
        return this._historico
    }

    setLogado(logado){
        this._logado = logado
    }

    getLogado(){
        return this._logado
    }
}

let conta = Conta.getInstance()
conta.setName('Tamyris Rayane Machado')
conta.setLogin('20222018617')
conta.setSenha('tamyris')

