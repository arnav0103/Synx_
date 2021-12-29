from Tools import db,login_manager
from werkzeug.security import generate_password_hash,check_password_hash
from flask_login import UserMixin
from datetime import datetime

@login_manager.user_loader
def load_user(user_id):
    return User.query.get(user_id)
followers = db.Table('follow',
  db.Column('follower_id', db.Integer , db.ForeignKey('users.id')),
  db.Column('followed_id', db.Integer , db.ForeignKey('users.id')))

song = db.Table('song',
  db.Column('user_id', db.Integer , db.ForeignKey('users.id')),
  db.Column('song_id', db.Integer , db.ForeignKey('songs.id')))
class User(db.Model,UserMixin):
    __tablename__ = 'users'
    id = db.Column(db.Integer,primary_key = True)
    name = db.Column(db.String(64))
    username = db.Column(db.String , unique = True)
    email = db.Column(db.String(64),unique = True,index = True)
    password_hash = db.Column(db.String(128))
    followed = db.relationship('User',
                               secondary=followers,
                               primaryjoin=(followers.c.follower_id == id),
                               secondaryjoin=(followers.c.followed_id == id),
                               backref=db.backref('followers', lazy='dynamic'),
                               lazy='dynamic')
    songs = db.relationship('Songs' , secondary = song , backref = db.backref('songs', lazy = 'dynamic'))

    def check_password(self,password):
        return check_password_hash(self.password_hash,password)
    def follow(self, user):
        if not self.is_following(user):
            self.followed.append(user)
            return self

    def unfollow(self, user):
        if self.is_following(user):
            self.followed.remove(user)
            return self

    def is_following(self, user):
        return self.followed.filter(followers.c.followed_id == user.id).count() > 0
    def __init__(self, name,username, email, password ):
        self.email = email
        self.name =name
        self.username = username
        self.password_hash = generate_password_hash(password)

class Songs(db.Model):
    __tablename__ = 'songs'
    id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String(64))
    def __init__(self, name):
        self.name = name
