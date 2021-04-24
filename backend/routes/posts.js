const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const multer = require('../middlewares/multer_config');

const postCtrl = require('../controllers/posts');

// créer 1 post                                             // OK, testé
router.post('/', auth, multer, postCtrl.createPost)

// récupérer tous les publications                          // OK, testé
router.get('/', auth, postCtrl.getAllPosts)

//====> Misa à jour publication <====\\                     // OK testé
router.put("/:postId/:id/update", auth, multer, postCtrl.updatePost);

//====> Suppression d'une publication <====\\               // OK testé
router.delete("/:postId", auth, postCtrl.deletePost);

//====> Récupèration des publications de l'utilisateur <====\\      // OK testé
router.get("/:id", auth, postCtrl.getUserPosts);

//====> Ajout ou suppresson de like <====\\                 // OK testé
router.post("/:postId/:userId/like", auth, postCtrl.createLike);

//====> Récupèration des likes d'une publication <====\\    // Ok testé
router.get("/:postId/like", auth, postCtrl.getLike);        







module.exports = router


