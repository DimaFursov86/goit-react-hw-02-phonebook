import s from './ContactList.module.scss';

export default function ContactList({ contacts, onDeleteContact }) {
  return (
    <ul className={s.contactList}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={s.contactItem}>
          <p className={s.contactItemText}>{name}</p>
          <p className={s.contactItemText}>{number}</p>
          <button
            type="button"
            className={s.contactItemText}
            onClick={() => onDeleteContact(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
