# Generated by Django 2.2.4 on 2019-08-12 11:07

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('stock', '0002_auto_20190811_2009'),
        ('user', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='portfolio',
            name='Tickercode',
            field=models.ForeignKey(default=0, on_delete=django.db.models.deletion.CASCADE, to='stock.Ticker'),
        ),
    ]