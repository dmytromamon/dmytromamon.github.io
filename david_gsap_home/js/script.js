"use strict";

$(function(){
  var tl = new TimelineMax({onComplete:function() {
    this.restart();
}}),
      frames1_16frames28_30 = $('.f1_16-28_30'),
      frames17_28 = $('.f17_28'),
      full = $('.full'),
      rect = $('.rect'),
      frames22_28 = $('.r22_28'),
      frames21_27 = $('.r21_27'),
      frames28_30 = $('.r28_30'),
      frames5_11 = $('.r5_11'),
      frames5_12 = $('.r5_12'),
      frames6_12 = $('.r6_12'),
      frames12_18 = $('.r12_18'),
      frames4_10 = $('.r4_10'),
      frames9_16 = $('.r9_16'),
      frames12_20 = $('.r12_20'),
      frames7_14 = $('.r7_14'),
      frames13_20 = $('.r13_20'),
      frames15_22 = $('.r15_22'),
      frames23_29 = $('.r23_29'),
      frames17_24 = $('.r17_24'),
      frames1_6 = $('.r1_6'),
      frames2_8frames17_23 = $('.r2_8-17_23'),
      frames1_4frames28_30 = $('.r1_4-28_30'),
      frames1_5frames28_30 = $('.r1_5-28_30');
  
//  full sized
  
  TweenLite.set(full, {transformPerspective:1000});
  TweenLite.set(rect, {transformPerspective:500});
  
//  1x1 sized
  
  tl.to(frames1_16frames28_30, .5, {ease: Power1.easeOut, rotationY: 90, scale: .75}, 15.5);
  tl.to(frames1_16frames28_30, .001, {ease: Power1.easeIn, rotationY: -90, scale: .75}, 16.11);
  tl.to(frames1_16frames28_30, .5, {ease: Power1.easeOut, rotationY: 0, scale: 1}, 28.5);
  tl.from(frames17_28, .5, {ease: Power1.easeIn, rotationY: -90, scale: .75}, 16.01);
  tl.to(frames17_28, .5, {ease: Power1.easeOut, rotationY: 90, scale: .75}, 28);
  tl.from(frames22_28, .5, {ease: Power1.easeIn, rotationY: -90, scaleY: 1}, 22.5);
  tl.to(frames22_28, .5, {ease: Power1.easeOut, rotationY: 90, scaleY: 1}, 27);
  tl.from(frames21_27, .5, {ease: Power1.easeIn, rotationY: -90, scaleY: 1}, 21.5);
  tl.to(frames21_27, .5, {ease: Power1.easeOut, rotationY: 90, scaleY: 1}, 26);
  tl.from(frames28_30, .5, {ease: Power1.easeIn, rotationY: -90, scaleY: 1}, 27.5);
  tl.to(frames28_30, .5, {ease: Power1.easeOut, rotationY: 90, scaleY: 1}, 29.5);
  tl.from(frames5_11, .5, {ease: Power1.easeIn, rotationY: -90, scaleY: 1}, 5.5);
  tl.to(frames5_11, .5, {ease: Power1.easeOut, rotationY: 90, scaleY: 1}, 10);
  tl.from(frames12_18, .5, {ease: Power1.easeIn, rotationY: -90, scaleY: 1}, 12.5);
  tl.to(frames12_18, .5, {ease: Power1.easeOut, rotationY: 90, scaleY: 1}, 17);
  
//  1x2 sized
  
  tl.from(frames4_10, .5, {ease: Power1.easeIn, rotationY: -90, scaleY: 1}, 1.5);
  tl.to(frames4_10, .5, {ease: Power1.easeOut, rotationY: 90, scaleY: 1}, 9);
  tl.from(frames9_16, .5, {ease: Power1.easeIn, rotationY: -90, scaleY: 1}, 8.5);
  tl.to(frames9_16, .5, {ease: Power1.easeOut, rotationY: 90, scaleY: 1}, 15);
  tl.from(frames12_20, .5, {ease: Power1.easeIn, rotationY: -90, scaleY: 1}, 12.5);
  tl.to(frames12_20, .5, {ease: Power1.easeOut, rotationY: 90, scaleY: 1}, 19);
  tl.from(frames2_8frames17_23, .5, {ease: Power1.easeIn, rotationY: -90}, 2.5);
  tl.to(frames2_8frames17_23, .5, {ease: Power1.easeOut, rotationY: 90}, 8);
  tl.to(frames2_8frames17_23, .001, {ease: Power1.easeIn, rotationY: -90}, 8.61);
  tl.to(frames2_8frames17_23, .5, {ease: Power1.easeIn, rotationY: 0}, 17.5);
  tl.to(frames2_8frames17_23, .5, {ease: Power1.easeOut, rotationY: 90}, 22);
  tl.to(frames1_4frames28_30, .5, {ease: Power1.easeOut, rotationY: 90}, 5);
  tl.to(frames1_4frames28_30, .001, {ease: Power1.easeIn, rotationY: -90}, 5.61);
  tl.to(frames1_4frames28_30, .5, {ease: Power1.easeOut, rotationY: 0}, 28);
  
//  2x2 sized
  
  tl.from(frames7_14, .5, {ease: Power1.easeIn, rotationY: -90, scaleY: 1}, 7.5);
  tl.to(frames7_14, .5, {ease: Power1.easeOut, rotationY: 90, scaleY: 1}, 13); 
  tl.from(frames5_12, .5, {ease: Power1.easeIn, rotationY: -90, scaleY: 1}, 5.5);
  tl.to(frames5_12, .5, {ease: Power1.easeOut, rotationY: 90, scaleY: 1}, 12);  
  tl.from(frames6_12, .5, {ease: Power1.easeIn, rotationY: -90, scaleY: 1}, 6.5);
  tl.to(frames6_12, .5, {ease: Power1.easeOut, rotationY: 90, scaleY: 1}, 11); 
  tl.from(frames13_20, .5, {ease: Power1.easeIn, rotationY: -90, scaleY: 1}, 13.5);
  tl.to(frames13_20, .5, {ease: Power1.easeOut, rotationY: 90, scaleY: 1}, 19); 
  tl.from(frames15_22, .5, {ease: Power1.easeIn, rotationY: -90, scaleY: 1}, 15.5);
  tl.to(frames15_22, .5, {ease: Power1.easeOut, rotationY: 90, scaleY: 1}, 21); 
  tl.from(frames23_29, .5, {ease: Power1.easeIn, rotationY: -90, scaleY: 1}, 23.5);
  tl.to(frames23_29, .5, {ease: Power1.easeOut, rotationY: 90, scaleY: 1}, 29);
  tl.from(frames17_24, .5, {ease: Power1.easeIn, rotationY: -90, scaleY: 1}, 17.5);
  tl.to(frames17_24, .5, {ease: Power1.easeOut, rotationY: 90, scaleY: 1}, 23);
  tl.to(frames1_6, .5, {ease: Power1.easeOut, rotationY: 90, scaleY: 1}, 5);
  tl.to(frames1_6, .001, {ease: Power1.easeIn, rotationY: -90, scaleY: 1}, 28); 
  tl.to(frames1_6, .5, {ease: Power1.easeIn, rotationY: 0, scaleY: 1}, 29.5); 
  tl.to(frames1_5frames28_30, .5, {ease: Power1.easeIn, rotationY: 90}, 6);
  tl.to(frames1_5frames28_30, .001, {ease: Power1.easeIn, rotationY: -90}, 6.61);
  tl.to(frames1_5frames28_30, .5, {ease: Power1.easeIn, rotationY: 0}, 27.5);
})