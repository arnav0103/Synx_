from Tools import app, db
from Tools.forms import RegistrationForm, LoginForm, FriendForm
from Tools.models import User,Songs
from flask import render_template,request, url_for, redirect, flash ,abort, jsonify, make_response
from flask_login import current_user, login_required, login_user , logout_user
from sqlalchemy import desc, asc
import os
from flask import Flask, render_template, request, abort
from datetime import datetime
@app.route('/lofi' , methods = ['GET' , 'POST'])
def lofi():
    return render_template("lofi.htm")
@app.route('/hcali' , methods = ['GET' , 'POST'])
def hcali():
    return render_template("hcali.htm")

@app.route('/coa' , methods = ['GET' , 'POST'])
def coa():
    return render_template("coa.htm")

@app.route('/cthru' , methods = ['GET' , 'POST'])
def cthru():
    return render_template("cthru.htm")
@app.route('/lib' , methods = ['GET' , 'POST'])
def lib():
    return render_template("lib.htm")

@app.route('/' , methods = ['GET' , 'POST'])
def index():
    return render_template("index.htm")

@app.route('/explore' , methods = ['GET' , 'POST'])
def explore():
    return render_template("explore.htm")

@app.route('/register' , methods = ['GET', 'POST'])
def register():
    form = RegistrationForm()
    if form.validate_on_submit():
        user = User(name = form.name.data,
                    username = form.username.data,
                    email = form.email.data ,
                    password = form.password.data)
        db.session.add(user)
        db.session.commit()
        return redirect(url_for('login'))
    return render_template('register.htm', form = form)
@app.route('/logout')
@login_required
def logout():
    logout_user()
    return redirect(url_for("index"))


@app.route('/login' , methods = ['GET', 'POST'])
def login():
    form = LoginForm()
    error = ''
    if form.validate_on_submit():

        user = User.query.filter_by(email=form.email.data).first()

        if user is not None and user.check_password(form.password.data) :

            login_user(user)
            flash('Log in Success!')

            next = request.args.get('next')
            if next == None or not next[0] =='/':
                next = url_for('index')
            return redirect(next)
        elif user is not None and user.check_password(form.password.data) == False:
            error = 'Wrong Password'
        elif user is None:
            error = 'No such login Pls create one'

    return render_template('login.htm', form=form, error = error)

@app.route('/add_friend',methods = ['GET','POST'])
@login_required
def friend():
    form = FriendForm()
    if form.validate_on_submit():
        user = User.query.filter_by(username=form.username.data).first
        u = current_user.follow(user)
        db.session.add(u)
        db.session.commit()
        return redirect(url_for('index'))
    return render_template('friend.htm', form=form)

@app.route('/friend/<username>',methods = ['GET','POST'])
@login_required
def profile(username):
    user = User.query.filter_by(username=username).first()
    song_liked = []
    for i in user.songs:
        song_liked.append(i)
    return render_template('profile.htm',user=user, song_liked = song_liked)

@app.route('/like/song/<song_id>',methods = ['GET','POST'])
@login_required
def like_song(song_id):
    song = Songs.query.get(song_id)
    current_user.songs.append(song)
    db.session.commit()
    return redirect(url_for('index'))

@app.route('/friends',methods = ['GET','POST'])
@login_required
def friend_list():
    followed = []
    for i in current_user.followed:
        followed.append(i)
    return render_template('friend_list.htm',followed = followed)

###########################################

@app.errorhandler(404)
def page_not_found(e):
    return render_template('Error/404.html'), 404


@app.errorhandler(403)
def action_forbidden(e):
    return render_template('Error/403.html'), 403

@app.errorhandler(410)
def page_deleted(e):
    return render_template('Error/410.html'), 410

@app.errorhandler(500)
def internal_server_error(e):
    return render_template('Error/500.html'), 500

##############################################


if __name__ == '__main__':
    app.run(debug=True)
