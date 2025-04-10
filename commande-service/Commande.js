const mongoose = require('mongoose');

const CommandeSchema = mongoose.Schema({
    produits: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Produit"  
    }],
    email_utilisateur: String,
    prix_total: Number,
    created_at: {
        type: Date,
        default: Date.now(),
    },
});

module.exports = Commande = mongoose.model("commande", CommandeSchema);