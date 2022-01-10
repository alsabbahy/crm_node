import { addContact, getContactID, getContacts, updateContact, _deleteContact } from "../controllers/crmController";

const routes = (app) => {
  app
    .route("/contact")
    .get((req, res, next) => {
      //middleware
      console.log(`Request from: ${req.originalUrl}`);
      console.log(`Request type: ${req.method}`);
      next();
    }, getContacts)
    .post(addContact);

  app
    .route("/contact/:contactID")
    .get(getContactID)
    .put(updateContact)
    .delete(_deleteContact);
};

export default routes;
