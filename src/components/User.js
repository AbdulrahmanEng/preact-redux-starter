import { h } from 'preact';

export default function User (props) {
  return (
    <div class="user">
        <div class="user__image">
          <img src={props.image}/>
        </div>
        <div class="user__name">{props.name}</div>
      </div>
    );
}