import mongoose from "mongoose";
import { ContactSchema } from "../models/crmModel";

const Contact = mongoose.model("Contact", ContactSchema);

export const addContact = (req, res) => {
  let newContact = new Contact(req.body);
  newContact.save((err, contact) => {
    if (err) {
      res.send(err);
    }
    res.json(contact);
  });
};

export const getContacts = (req, res) => {
  Contact.find({}, (err, contacts) => {
    if (err) {
      res.send(err);
    }
    res.json(contacts);
  });
};
export const getContactID = (req, res) => {
  Contact.findById(req.params.contactID, (err, contact) => {
    if (err) {
      res.send(err);
    }
    res.json(contact);
  });
};
export const updateContact = (req, res) => {
  Contact.findOneAndUpdate({ _id: req.params.contactID }, req.body, { new: true }, (err, contact) => {
    if (err) {
      res.send(err);
    }
    res.json(contact);
  });
};

export const _deleteContact = (req, res) => {
  Contact.remove({ _id: req.params.contactID }, (err, contact) => {
    if (err) {
      res.send(err);
    }
    res.json({ delete: true });
  });
};
